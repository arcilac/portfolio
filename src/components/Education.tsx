import React, { forwardRef } from "react"

const Education = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section
      ref={ref}
      id="about"
      className="min-h-screen flex flex-col justify-center items-center py-20 bg-gradient-to-b from-black to-gray-900 text-white"
    >
      <h2 className="text-4xl font-bold mb-12 text-gradient bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
        Education
      </h2>
      <div className="max-w-2xl text-center">
        <ul className="list-disc list-inside mb-6 text-gray-300">
          <li>Technical in Systems, January 2018 - December 2020</li>
          <li>Self-taught, December 2020 - Until now</li>
        </ul>
        <p className="text-lg text-gray-300">
          Since finishing my systems technician degree, I have dedicated myself to studying
          programming on a self-taught basis. Continuous learning has been my driving force and I am
          excited to continue growing in this exciting field!
        </p>
      </div>
    </section>
  )
})

Education.displayName = "Education"

export default Education
