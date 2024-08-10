import React, { useState, useEffect } from "react"
import { ParallaxProvider } from "react-scroll-parallax"
import Header from "./components/Header"
import About from "./components/About"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import Background from "./components/Background"
import Lead from "./components/Lead"
import "./App.css"

function App() {
  const [showContact, setShowContact] = useState(false)
  const [scrollToContact, setScrollToContact] = useState(false)

  const handleContactClick = () => {
    setShowContact(true) // Muestra la sección de contacto
    setScrollToContact(true) // Marca que debe desplazarse a la sección de contacto
  }

  useEffect(() => {
    if (showContact && scrollToContact) {
      const contactSection = document.querySelector("#contact-section")
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" })
        setScrollToContact(false) // Resetea el flag para que no vuelva a desplazarse
      }
    }
  }, [showContact, scrollToContact])

  return (
    <ParallaxProvider>
      <div>
        <Header onContactClick={handleContactClick} />
        <Lead />
        <About />
        <Background />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        {showContact && (
          <div id="contact-section">
            <Contact />
          </div>
        )}
        <Footer />
      </div>
    </ParallaxProvider>
  )
}

export default App
