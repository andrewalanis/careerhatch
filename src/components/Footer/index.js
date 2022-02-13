import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Logo from "../../assets/img/logo.png"
import Facebook from "../../assets/img/facebook.png"
import Twitter from "../../assets/img/twitter.png"
import Instagram from "../../assets/img/instagram.png"
import Linkedin from "../../assets/img/linkedin.png"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulMenuItem {
        nodes {
          uri
          name
        }
      }
      allContentfulSocialMediaLinks {
        nodes {
          facebook
          instagram
          linkedin
          twitter
        }
      }
    }
  `)
  const { allContentfulMenuItem, allContentfulSocialMediaLinks } = data
  return (
    <div className="footer">
      <div className="footer-1">
        <div>
          <div className="sec-1  footer-spacing">
            <div className="text-center">
              <img src={Logo} alt="logo" className="logo-footer" />
            </div>
          </div>
        </div>
        <div className="sec-2 footer-spacing">
          <div>
            <ul className="list-menu">
              {allContentfulMenuItem?.nodes.map((v, i) => (
                <li key={i}>
                  <Link to={v.uri} activeClassName="activeLink-footer">
                    {v.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="sec-3 footer-spacing">
          <div className="text-center">
            <div className="media">
              <a href={allContentfulSocialMediaLinks.nodes[0].facebook}>
                <img src={Facebook} />
              </a>
              <a href={allContentfulSocialMediaLinks.nodes[0].twitter}>
                <img src={Twitter} />
              </a>
              <a href={allContentfulSocialMediaLinks.nodes[0].instagram}>
                <img src={Instagram} />
              </a>
              <a href={allContentfulSocialMediaLinks.nodes[0].linkedin}>
                <img src={Linkedin} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-2 ">
        <div className="text text-center">
          <p>Copyright 2021 - All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
