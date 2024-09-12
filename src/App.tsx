import React, { useState } from "react"
import Hero from "./components/Hero.tsx"
import Projects from "./components/Projects.tsx"
import About from "./components/About.tsx"
import Skills from "./components/Skills.tsx"
import Contact from "./components/Contact.tsx"
import Footer from "./components/Footer.tsx"
import Menu from "./components/Menu.tsx"
import Education from "./components/Education.tsx"
import Experience from "./components/Experience.tsx"

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home")
  const [showContact, setShowContact] = useState(false)

  const sections = [
    { id: "home", component: <Hero /> },
    { id: "projects", component: <Projects /> },
    { id: "about", component: <About /> },
    { id: "education", component: <Education /> },
    { id: "experience", component: <Experience /> },
    { id: "skills", component: <Skills /> },
  ]

  const handleMenuClick = (section: string) => {
    setActiveSection(section)
    if (section === "contact") {
      setShowContact(true)
    } else {
      setShowContact(false)
    }
  }

  const handleCloseContact = () => {
    setShowContact(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans">
      <Menu activeSection={activeSection} onMenuClick={handleMenuClick} />
      <main>
        {sections.map(({ id, component }) => (
          <section
            key={id}
            id={id}
            className={`min-h-screen ${activeSection === id ? "" : "hidden"}`}
          >
            {component}
          </section>
        ))}
        {showContact && <Contact onClose={handleCloseContact} />}
      </main>
      <Footer />
    </div>
  )
}

export default App
