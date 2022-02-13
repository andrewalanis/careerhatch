import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import Breadcrumbs from "@material-ui/core/Breadcrumbs"
import Link from "@material-ui/core/Link"
import HomeIcon from "@material-ui/icons/Home"

const useStyles = makeStyles(theme => ({
  link: {
    display: "flex",
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}))

const getPage = name => {
  switch (name[1]) {
    case "about-us":
      return "About Us"
    case "properties":
      return "Properties"
    case "services":
      return "Services"
    case "blogs":
      return "Blogs"
    case "contact-us":
      return "Contact Us"
  }
}

const NavigationBox = ({ currentRoute }) => {
  const classes = useStyles()
  let blogName = currentRoute.includes("blogs")
    ? decodeURI(currentRoute).split("/")
    : undefined

  let pageName = currentRoute.includes("blogs")
    ? getPage(blogName)
    : getPage(currentRoute.split("/"))

  return (
    <div className="navigationBox">
      <div className="contain d-flex align-items-center">
        <div className="pagename">
          <h1>{pageName}</h1>
        </div>
        <div className="breadcrumbs">
          {currentRoute.includes("blogs") && blogName !== undefined ? (
            <Breadcrumbs aria-label="breadcrumb" separator="›">
              <Link color="textPrimary" href="/" className={classes.link}>
                <HomeIcon className={classes.icon} />
              </Link>
              <Link color="textPrimary" href="/blogs" className={classes.link}>
                {pageName}
              </Link>
              <p color="inherit">{blogName[2]}</p>
            </Breadcrumbs>
          ) : (
            <Breadcrumbs aria-label="breadcrumb" separator="›">
              <Link color="textPrimary" href="/" className={classes.link}>
                <HomeIcon className={classes.icon} />
              </Link>
              <p color="inherit">{pageName}</p>
            </Breadcrumbs>
          )}
        </div>
      </div>
    </div>
  )
}

export default NavigationBox
