import React, { forwardRef } from "react"
import "../App.css"

const Lead = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="home" className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-2">Camila Arcila</h1>
      <h2 className="text-2xl mb-8">Fullstack Web Developer</h2>
    </section>
  )
})

export default Lead
