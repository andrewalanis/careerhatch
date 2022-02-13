import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

const About = ({ location, data }) => {
  const { allContentfulAboutUs } = data
  return (
    <Layout location={location} title="About Us">
      <div className="container about">
        <div className="row align-items-center justify-content-between">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="heading">
              <h2>About Us</h2>
            </div>
            <div className="gap-spacing"></div>
            <div>
              <p className="description">
                <span>
                  {allContentfulAboutUs.nodes[0].description.description}
                </span>
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 image">
            <img
              src={allContentfulAboutUs.nodes[0].image.file.url}
              alt={allContentfulAboutUs.nodes[0].image.file.fileName}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About

export const query = graphql`
  query {
    allContentfulAboutUs {
      nodes {
        image {
          file {
            fileName
            url
          }
        }
        description {
          description
        }
      }
    }
  }
`
