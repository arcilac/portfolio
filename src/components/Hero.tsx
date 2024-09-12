import React, { forwardRef } from "react"

const Hero = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section
      ref={ref}
      id="home"
      className="h-screen flex flex-col justify-center items-center relative overflow-hidden"
    >
      <h1 className="text-6xl font-bold mb-4 animate-fade-in-down">Camila Arcila</h1>
      <h2 className="text-3xl mb-8 animate-fade-in-up">Fullstack Web Developer</h2>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-pink-500 opacity-20 z-0"></div>
    </section>
  )
})

Hero.displayName = "Hero"

export default Hero
