import React from "react"

const BulletPoint = ({ description }) => {
  return (
    <li className="bulletPoint">
      <div className="icon">
        <div>{">"}</div>
      </div>
      <div className="description">{description}</div>
    </li>
  )
}

export default BulletPoint
