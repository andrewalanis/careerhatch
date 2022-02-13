import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import ContactInfo from "../components/ContactInfo"
import Envelope from "../assets/img/envelope.png"
import Mark from "../assets/img/marker.png"
import Phone from "../assets/img/phone.png"
const mailchimpClient = require("@mailchimp/mailchimp_transactional")(
  "Jlkfx2f9dE2IMd_DwmkhXg"
)
const mailchimp = require("@mailchimp/mailchimp_marketing")

mailchimp.setConfig({
  apiKey: "a96e71424bc05894eaf627a63942cb99-us6",
  server: "us6",
})

const Contact = ({ location, data }) => {
  const { allContentfulContactUs } = data

  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async () => {
    const responseOne = await mailchimpClient.messages.send({
      message: {
        from_email: "support@thetexaspropertybrothers.com",
        subject: "texas-property-brothers ( Website )",
        text: `Email: ${email}
               Phone: ${phone}
               message: ${message}
        `,
        to: [
          {
            email: "support@thetexaspropertybrothers.com",
            type: "to",
          },
        ],
      },
    })
  }

  return (
    <Layout location={location} title="Contact Us">
      <div className="container contact">
        <div className="gap-contact"></div>
        <div className="contact-heading">
          <h2 className="text-center">
            <span>
              Get in <span style={{ color: "#154a40" }}>touch</span> with us
            </span>
          </h2>
        </div>
        <div className="gap-contact"></div>
        <div className="row d-flex align-items-center justify-content-between">
          <div className="contact-info col-sm-12 col-md-12 col-lg-6">
            <div>
              <div className="gap-contact"></div>
              <ContactInfo
                description={allContentfulContactUs.nodes[0].email}
                title="Email"
                img={Envelope}
              />
              <ContactInfo
                description={allContentfulContactUs.nodes[0].phone}
                title="Phone"
                img={Phone}
              />
              <ContactInfo
                title="Address"
                description={allContentfulContactUs.nodes[0].address}
                img={Mark}
              />
            </div>
          </div>
          <div className="contact-form col-sm-12 col-md-12 col-lg-6">
            <div>
              <div className="d-flex flex-column">
                <label>Your phone</label>
                <input
                  required
                  onChange={e => setPhone(e.currentTarget.value)}
                />
              </div>
              <div className="d-flex flex-column">
                <label>Your email</label>
                <input
                  required
                  onChange={e => setEmail(e.currentTarget.value)}
                />
              </div>
              <div>
                <label>Your message (optional)</label>
                <textarea onChange={e => setMessage(e.currentTarget.value)} />
              </div>
              <div>
                <button className="submit-contact" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact

export const query = graphql`
  query {
    allContentfulContactUs {
      nodes {
        email
        address
        phone
      }
    }
  }
`
