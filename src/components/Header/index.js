import React from "react"
import clsx from "clsx"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import MenuItem from "./MenuItem"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import { makeStyles } from "@material-ui/core/styles"
import { Link, useStaticQuery, graphql } from "gatsby"

import Logo from "../../assets/img/logo.png"

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
})

function ElevationScroll(props) {
  const { children, window } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

const Header = props => {
  const classes = useStyles()
  const isSize = useBreakpoint()
  const data = useStaticQuery(graphql`
    query {
      allContentfulMenuItem {
        nodes {
          uri
          name
        }
      }
    }
  `)
  const { allContentfulMenuItem } = data

  const [state, setState] = React.useState({ right: false })

  const toggleDrawer = (anchor, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }
  const list = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {allContentfulMenuItem.nodes.map((v, index) => (
          <>
            <ListItem button key={index}>
              <Link to={v.uri}>
                <ListItemText primary={v.name} />
              </Link>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
      <Divider />
    </div>
  )

  return (
    <div className="header">
      <ElevationScroll {...props}>
        <AppBar position="fixed" className="desktop-header">
          <Toolbar>
            <div className="logo">
              <Link to="/">
                <img src={Logo} alt="logo" />
              </Link>
            </div>
            {isSize.lg ? (
              <div>
                {["right"].map(anchor => (
                  <React.Fragment key={anchor}>
                    <IconButton
                      edge="start"
                      color="black"
                      aria-label="menu"
                      onClick={toggleDrawer(anchor, true)}
                    >
                      <MenuIcon />
                    </IconButton>
                    <SwipeableDrawer
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                      onOpen={toggleDrawer(anchor, true)}
                    >
                      {list(anchor)}
                    </SwipeableDrawer>
                  </React.Fragment>
                ))}
              </div>
            ) : (
              <>
                {allContentfulMenuItem?.nodes.map((v, i) => (
                  <MenuItem name={v.name} uri={v.uri} key={i} />
                ))}
              </>
            )}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  )
}

export default Header
