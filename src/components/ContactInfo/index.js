import React from "react"

const ContactInfo = ({ title, img, description }) => {
  return (
    <>
      <div className="d-flex align-items-center">
        <div className="contact-icon d-flex align-items-center justify-content-center">
          <img src={img} alt={title} />
        </div>
        <div>
          <h3>{title}:</h3>
          <div style={{wordWrap: "anywhere"}}>{description}</div>
        </div>
      </div>
      <div className="gap-contact"></div>
    </>
  )
}

export default ContactInfo
