import React, { forwardRef } from "react"
import { projects } from "../data/projects.ts"

const Projects = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section
      ref={ref}
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center py-20 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <h2 className="text-4xl font-bold mb-12 text-gradient bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.name}
            className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
          >
            <img
              src={project.image}
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
