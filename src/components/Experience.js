import React from "react"
import { Parallax } from "react-scroll-parallax"
import "../assets/css/styles.css"

const Experience = () => {
  return (
    <div id="experience" className="background-alt">
      <Parallax translateX={[-30, 30]}>
        <h2 className="heading">Experience</h2>
      </Parallax>

      <div id="experience-timeline">
        <div data-date="2021- current">
          <Parallax translateX={[10, -10]}>
            <h3>Web UI Developer at KoodiStudio</h3>
          </Parallax>
          <p>
            In my role as part of a squad with multiple engineers, was to take charge of the web
            application using React, JS, nextjs, CSS, due to good use of the technologies and
            optimizations for SEO the company increased the engagement more than twice. I worked
            closely with the team to run the app in all devices. This experience really boosted my
            skills in coding, teamwork and tricky problem solving, and I am proud to see our work
            mnake a difference for the users.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Experience
