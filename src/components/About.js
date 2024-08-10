import React from "react"
import { Parallax } from "react-scroll-parallax"
import "../assets/css/styles.css"
import profileImage from "../assets/images/photo.jpg"

const About = () => {
  return (
    <div id="about">
      <div className="container">
        <h2 className="headingAb">About Me</h2>
        <div className="about-content">
          <Parallax translateY={[-20, 10]} className="profile-image">
            <img src={profileImage} alt="Profile" className="profile-img" />
          </Parallax>
          <Parallax translateY={[-15, 15]} scale={[1, 1.15]} className="text-content">
            <p>
              Hi! I'm Camila Arcila Sanchez, passionate about programming and software development.
              Since I was very young, I have always been fascinated by the world of technology and
              how it can transform our lives. My goal is to create innovative solutions that make a
              difference and improve user experience.
            </p>
            <p>
              I have acquired skills in several areas, including frontend and backend web
              development, mobile application design, and teamwork. I love taking on new challenges
              and constantly learning. I am always looking for opportunities to expand my knowledge
              and explore new technologies.
            </p>
            <p>
              I am excited for the opportunity to collaborate on interesting projects and contribute
              to the growth of your team or company. If you are looking for someone committed,
              proactive, and passionate about technology, don't hesitate to contact me!
            </p>
          </Parallax>
        </div>
      </div>
    </div>
  )
}

export default About
