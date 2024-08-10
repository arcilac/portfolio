import React from "react"
import { Parallax } from "react-scroll-parallax"
import "../assets/css/styles.css"

const Projects = () => {
  return (
    <div id="projects">
      <h2 className="heading">Projects</h2>
      <div className="projects-block">
        <h3>React</h3>
        <h4>
          <Parallax scale={[1, 1.2]}>
            <a
              href="https://github.com/Arcilac/todo-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit on GitHub
            </a>
          </Parallax>
        </h4>
        <h4>
          <Parallax scale={[1, 1.2]}>
            <a
              href="https://arcilac.github.io/todo-react/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View the Project
            </a>
          </Parallax>
        </h4>
        <p>
          I used React to create a task markup project that facilitates the organization and
          management of daily activities. This project demonstrates my ability to develop
          interactive and user-centric applications using modern technologies such as React.
        </p>
      </div>
      <div className="projects-block">
        <h3>Exchange</h3>
        <h4>
          <Parallax scale={[1, 1.2]}>
            <a
              href="https://github.com/Arcilac/redux-practice"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit on GitHub
            </a>
          </Parallax>
        </h4>
        <p>
          I developed a currency converter project using Redux to exchange different currencies,
          such as converting dollars to euros. This project shows my proficiency in managing global
          state and complex data flows using Redux, ensuring a smooth and efficient user experience.
        </p>
      </div>
      <div className="projects-block">
        <h3>Time</h3>
        <h4>
          <Parallax scale={[1, 1.2]}>
            <a href="https://github.com/Arcilac/time" target="_blank" rel="noopener noreferrer">
              Visit on GitHub
            </a>
          </Parallax>
        </h4>
        <h4>
          <Parallax scale={[1, 1.2]}>
            <a href="https://arcilac.github.io/time/" target="_blank" rel="noopener noreferrer">
              View the Project
            </a>
          </Parallax>
        </h4>
        <p>
          I developed a small JavaScript library to calculate the hours worked. This library allows
          to calculate the time difference between two timestamps, which is useful for recording and
          calculating working hours. It uses native JavaScript functionality to calculate the
          difference in hours and minutes.
        </p>
      </div>
    </div>
  )
}

export default Projects
