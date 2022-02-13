import React from "react"
import Fab from "@material-ui/core/Fab"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"
import { Helmet } from "react-helmet"
import ScrollTop from "./ScrollTop"
import Header from "../Header"
import NavigationBox from "../NavigationBox"
import Footer from "../Footer"

const Layout = props => {
  return (
    <div>
      <Helmet>
        <title>{props.title}</title>
      </Helmet>
      <Header />
      <div className="navigation-div" id="back-to-top-anchor">
        {props.location.pathname !== "/" ? (
          <NavigationBox currentRoute={props.location.pathname} />
        ) : null}
      </div>
      <div>{props.children}</div>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      <Footer location={props.location} />
    </div>
  )
}

export default Layout
