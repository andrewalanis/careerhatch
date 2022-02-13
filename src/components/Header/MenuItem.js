import React from "react"
import Typography from "@material-ui/core/Typography"
import { Link } from "gatsby"

const MenuItem = ({ name, uri }) => {
  return (
    <Typography variant="h6" className="menu-item">
      <Link to={uri} activeClassName="active-desktopbar">
        {name}
      </Link>
    </Typography>
  )
}

export default MenuItem
