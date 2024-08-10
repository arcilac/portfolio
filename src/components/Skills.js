import React from "react"
import RadarChart from "./RadarChart"
import { Parallax } from "react-scroll-parallax"
import "../assets/css/styles.css"

const data = [
  { skill: "JavaScript", value: 8.5 },
  { skill: "Node.js", value: 7 },
  { skill: "React", value: 8.5 },
  { skill: "CSS", value: 6 },
  { skill: "TypeScript", value: 6.5 },
  { skill: "Next.js", value: 7 },
  { skill: "Express.js", value: 7 },
]

const Skills = () => {
  return (
    <div id="skills">
      <Parallax translateX={[-30, 30]}>
        <h2 className="heading">Skills</h2>
      </Parallax>
      <RadarChart data={data} />
    </div>
  )
}

export default Skills
