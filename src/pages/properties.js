import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import GalleryImage from "../components/GalleryImage"

const properties = ({ location, data }) => {
  const { allContentfulPropertiesImages } = data
  return (
    <Layout location={location} title="Properties">
      <div className="container properties">
        <div className="heading text-center">
          <h2>Gallery</h2>
        </div>
        <div className="gap-spacing"></div>

        <div className="row align-items-center justify-content-between">
          {allContentfulPropertiesImages.nodes[0].images.map((v, i) => (
            <GalleryImage img={v.file.url} alt={v.file.fileName} key={i} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default properties

export const data = graphql`
  query {
    allContentfulPropertiesImages {
      nodes {
        images {
          file {
            fileName
            url
          }
        }
      }
    }
  }
`
