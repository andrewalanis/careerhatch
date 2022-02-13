import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"

export default function Home({ location, data }) {
  const {
    allContentfulHomeSectionOne,
    allContentfulHomeSectionTwo,
    allContentfulHomeSectionThree,
    allContentfulHomeSectionFour,
    allContentfulHomeContactBox,
  } = data

  return (
    <Layout location={location} title="Home">
      <div className="home">
        <section className="section-one">
          <div className="gap"></div>
          <div className="contain">
            <div className="row align-items-center justify-content-between d-flex">
              <div className="col-sm-12 col-md-6 col-lg-6 section-div">
                <div className="heading ">
                  <h2 className="section-one-head">
                    <span>{allContentfulHomeSectionOne.nodes[0].title}</span>
                  </h2>
                </div>
                <div>
                  <p>
                    {
                      allContentfulHomeSectionOne.nodes[0].description
                        .description
                    }
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 image section-one-img sections-img">
                <img
                  src={allContentfulHomeSectionOne.nodes[0].image.file.url}
                  alt={allContentfulHomeSectionOne.nodes[0].image.file.fileName}
                />
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <section className="section-one">
          <div className="gap"></div>
          <div className="contain">
            <div className="row align-items-center justify-content-between d-flex section-two-div">
              <div className="col-sm-12 col-md-6 col-lg-6 image sections-img">
                <img
                  src={allContentfulHomeSectionTwo.nodes[0].image.file.url}
                  alt={allContentfulHomeSectionTwo.nodes[0].image.file.fileName}
                />
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 section-div">
                <div className="section-two-head">
                  <h2 className="section-one-head">
                    <span>{allContentfulHomeSectionTwo.nodes[0].title}</span>
                  </h2>
                </div>
                <div className="gap-spacing"></div>
                <div>
                  <p>
                    {
                      allContentfulHomeSectionTwo.nodes[0].description
                        .description
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <section className="section-three">
          <div className="gap-spacing"></div>
          <div className="gap-spacing"></div>
          <div className="container text-center">
            <div className="section-three-head">
              <h2>{allContentfulHomeSectionThree.nodes[0].title}</h2>
            </div>
            <div className="gap-spacing"></div>
            <div className="section-three-para">
              <p>
                {allContentfulHomeSectionThree.nodes[0].description.description}
              </p>
            </div>
            <div className="gap-spacing"></div>
            <div className="gap-spacing"></div>
          </div>
        </section>
        <br />
        <br />
        <section>
          <div className="contain">
            <div className="row align-items-center justify-content-between d-flex">
              <div className="col-sm-12 col-md-6 col-lg-6 section-div">
                <div className="section-two-head">
                  <h2 className="section-one-head">
                    <span style={{ color: "#154a40" }}>
                      {allContentfulHomeSectionFour.nodes[0].title}
                    </span>
                  </h2>
                </div>
                <div>
                  <p>
                    {
                      allContentfulHomeSectionFour.nodes[0].description
                        .description
                    }
                  </p>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 image sections-img">
                <img
                  src={allContentfulHomeSectionFour.nodes[0].image.file.url}
                  alt={
                    allContentfulHomeSectionFour.nodes[0].image.file.fileName
                  }
                />
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <section className="container section-five">
          <div className="section-five-bg">
            <div className="gap-spacing"></div>
            <div>
              <div className="section-two-head">
                <h2 className="section-one-head">
                  <span style={{ color: "#154a40" }}>
                    {allContentfulHomeContactBox.nodes[0].title}
                  </span>
                </h2>
              </div>
              <div>
                <p>
                  {allContentfulHomeContactBox.nodes[0].description.description}
                </p>
              </div>
              <div className="section-five-btn">
                <Link to="/contact-us">
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>
            <div className="gap-spacing"></div>
          </div>
        </section>
        <br />
        <br />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulHomeSectionOne {
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
      }
    }
    allContentfulHomeSectionTwo {
      nodes {
        title
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
    allContentfulHomeSectionThree {
      nodes {
        title
        description {
          description
        }
      }
    }
    allContentfulHomeSectionFour {
      nodes {
        description {
          description
        }
        title
        image {
          file {
            fileName
            url
          }
        }
      }
    }
    allContentfulHomeContactBox {
      nodes {
        description {
          description
        }
        title
      }
    }
  }
`
