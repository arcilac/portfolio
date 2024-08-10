import React from "react"
import { Parallax } from "react-scroll-parallax"
import "../assets/css/styles.css"

const Education = () => {
  return (
    <div id="education" className="education-section">
      <h2 className="heading">Education</h2>
      <div className="education-content">
        <Parallax translateY={[-20, 20]} className="education-block">
          <h3>La Paz Educational Institution</h3>
          <span className="education-date">January 2018 - December 2020</span>
          <h4>Technical Bachelor in Systems</h4>
          <p>
            For 3 years I was doing my technical training in systems focused on front-end in this
            educational institution.
          </p>
        </Parallax>
        <Parallax translateY={[20, -20]} className="education-block">
          <h3>Self-taught</h3>
          <span className="education-date">December 2020 - Until now</span>
          <h4>Developer</h4>
          <p>
            Since finishing my systems technician degree, I have dedicated myself to studying
            programming on a self-taught basis. Continuous learning has been my driving force and I
            am excited to continue growing in this exciting field!
          </p>
        </Parallax>
      </div>
    </div>
  )
}

export default Education
