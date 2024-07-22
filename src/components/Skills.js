import React from "react"
import RadarChart from "./RadarChart"
import "../assets/css/styles.css"

const data = [
  { skill: "JavaScript", value: 9 },
  { skill: "Node.js", value: 7 },
  { skill: "React", value: 9 },
  { skill: "CSS", value: 6 },
  { skill: "TypeScript", value: 6 },
  { skill: "Next.js", value: 7 },
  { skill: "Express.js", value: 7 },
]

const Skills = () => {
  return (
    <div id="skills">
      <h2 className="heading">Skills</h2>
      <RadarChart data={data} />
    </div>
  )
}

export default Skills
