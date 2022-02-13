import React from "react"

const GalleryImage = ({ img, alt }) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 image property-img">
      <img src={img} alt={alt} />
    </div>
  )
}

export default GalleryImage
