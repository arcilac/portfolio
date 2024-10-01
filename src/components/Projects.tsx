import React, { forwardRef } from "react"
import { useEffect } from "react"

interface Project {
  name: string
  tech: string
  description: string
  github: string
  live?: string
  imageName: string
}

const projects: Project[] = [
  {
    name: "Todo React",
    tech: "React",
    description:
      "I used React to create a task markup project that facilitates the organization and management of daily activities. This project demonstrates my ability to develop interactive and user-centric applications using modern technologies such as React.",
    github: "https://arcilac.github.io/todo-react/",
    live: "https://github.com/Arcilac/todo-react",
    imageName: "todo-react.jpg",
  },
  {
    name: "Exchange",
    tech: "Redux",
    description:
      "I developed a currency converter project using Redux to exchange different currencies, such as converting dollars to euros. This project shows my proficiency in managing global state and data flows using Redux, ensuring a smooth and efficient user experience.",
    github: "https://arcilac.github.io/redux-practice/",
    imageName: "exchange.jpg",
  },
  {
    name: "Time",
    tech: "JavaScript",
    description:
      "I developed a small JavaScript library to calculate the hours worked. This library allows to calculate the time difference between two timestamps, which is useful for recording and calculating working hours. It uses native JavaScript functionality to calculate the difference in hours and minutes.",
    github: "https://arcilac.github.io/time/",
    live: "https://arcilac.github.io/time/",
    imageName: "time.jpg",
  },
  {
    name: "Lazy Load and FizzBuzz",
    tech: "TypeScript",
    description:
      "I created a lazy-loading image component using TypeScript to improve website performance by loading images only when they are visible in the viewport. This project demonstrates my ability to use TypeScript to create efficient and scalable web applications that enhance the user experience, The FizzBuzz exercise in TypeScript highlights problem-solving skills and understanding of basic programming concepts.",
    github: "https://arcilac.github.io/lazy-load-images/",
    live: "https://arcilac.github.io/lazy-load-images/",
    imageName: "lazy-load.jpg",
  },
]

const Projects = forwardRef<HTMLElement>((props, ref) => {
  useEffect(() => {
    console.log("Current PUBLIC_URL:", process.env.PUBLIC_URL)
    projects.forEach((project) => {
      const img = new Image()
      img.src = `${process.env.PUBLIC_URL}/images/${project.imageName}`
      img.onload = () => console.log(`Image loaded successfully: ${project.imageName}`)
      img.onerror = () => console.error(`Failed to load image: ${project.imageName}`)
    })
  }, [])

  const handleProjectClick = (githubUrl: string) => {
    window.open(githubUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <section
      ref={ref}
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center py-20 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <h2 className="text-4xl font-bold mb-12 text-gradient bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform cursor-pointer"
            onClick={() => handleProjectClick(project.github)}
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/${project.imageName}`}
              alt={project.name}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-2xl font-semibold mb-2 text-gradient bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              {project.name}
            </h3>
            <p className="text-gray-300 mb-2">{project.description}</p>
            <p className="text-sm font-bold text-gray-400">{project.tech}</p>
          </div>
        ))}
      </div>
    </section>
  )
})

Projects.displayName = "Projects"

export default Projects
