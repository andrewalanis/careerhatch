import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import BlogPost from "../components/BlogPost"

const Blog = ({ location, data }) => {
  const { allContentfulBlog } = data
  return (
    <Layout location={location} title="Blogs">
      <div className="container blogDisplay">
        <div className="row align-items-center justify-content-between">
          {allContentfulBlog.nodes.map((v, i) => (
            <BlogPost
              title={v.title}
              img={v.image.file.url}
              date={v.date}
              alt={v.image.file.fileName}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query {
    allContentfulBlog {
      nodes {
        title
        description {
          description
        }
        image {
          file {
            fileName
            url
          }
        }
        date
      }
    }
  }
`
