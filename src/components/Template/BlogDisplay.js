import React from "react"
import Layout from "../Layout"

const BlogDisplay = ({ location, pageContext: { data } }) => {
  return (
    <Layout location={location} title={data.title}>
      <div className="blog-container">
        <div className="blog-margin">
          <div className="blog-title">
            <h1>{data.title}</h1>
          </div>
          <div className="blog-date">
            <p>
              <span>{data.date}</span>
            </p>
          </div>
          <div className="image">
            <img src={data.image.file.url} alt={data.image.file.fileName} />
          </div>
          <div className="blog-description">
            <p>{data.description.description}</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogDisplay
