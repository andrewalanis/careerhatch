import React from "react"
import { graphql } from "gatsby"
import BulletPoint from "../components/BulletPoint"
import Layout from "../components/Layout"
const Services = ({ data, location }) => {
  const { allContentfulServicesImage, allContentfulServicesBulletPoints } = data
  return (
    <Layout location={location} title="Services">
      <div className="services container d-flex">
        <div className="row align-items-center justify-content-between">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="heading">
              <h2>Services</h2>
            </div>
            <div className="gap-spacing"></div>
            <div>
              {allContentfulServicesBulletPoints.nodes.map((v, i) => (
                <BulletPoint key={i} description={v.point} />
              ))}
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 image">
            <img
              src={allContentfulServicesImage.nodes[0].image.file.url}
              alt={allContentfulServicesImage.nodes[0].image.file.fileName}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Services

export const query = graphql`
  query {
    allContentfulServicesImage {
      nodes {
        image {
          file {
            fileName
            url
          }
        }
      }
    }
    allContentfulServicesBulletPoints {
      nodes {
        point
      }
    }
  }
`
