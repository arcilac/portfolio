import React, { forwardRef } from "react"

const Experience = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section
      ref={ref}
      id="about"
      className="min-h-screen flex flex-col justify-center items-center py-20 bg-gradient-to-b from-black to-gray-900 text-white"
    >
      <h2 className="text-4xl font-bold mb-12 text-gradient bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
        Experience
      </h2>
      <h3 className="text-2xl font-bold mb-6">Web UI Developer at KoodiStudio</h3>
      <div className="max-w-2xl text-center">
        <p className="text-lg text-gray-300">
          In my role as part of a squad with multiple engineers, was to take charge of the web
          application using React, JS, nextjs, CSS, due to good use of the technologies and
          optimizations for SEO the company increased the engagement more than twice. I worked
          closely with the team to run the app in all devices. This experience really boosted my
          skills in coding, teamwork and tricky problem solving, and I am proud to see our work
          mnake a difference for the users.
        </p>
      </div>
    </section>
  )
})

Experience.displayName = "Experience"

export default Experience
