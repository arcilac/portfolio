import React, { useState, useRef } from "react"
import Hero from "./components/Hero.tsx"
import Projects from "./components/Projects.tsx"
import About from "./components/About.tsx"
import Skills from "./components/Skills.tsx"
import Experience from "./components/Experience.tsx"
import Education from "./components/Education.tsx"
import Footer from "./components/Footer.tsx"
import Menu from "./components/Menu.tsx"
import Contact from "./components/Contact.tsx"

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home")

  const sectionRefs = {
    home: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    experience: useRef<HTMLElement>(null),
    education: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  }

  const sections = [
    { id: "home", component: <Hero ref={sectionRefs.home} /> },
    { id: "projects", component: <Projects ref={sectionRefs.projects} /> },
    { id: "about", component: <About ref={sectionRefs.about} /> },
    { id: "skills", component: <Skills ref={sectionRefs.skills} /> },
    { id: "experience", component: <Experience ref={sectionRefs.experience} /> },
    { id: "education", component: <Education ref={sectionRefs.education} /> },
    { id: "contact", component: <Contact ref={sectionRefs.contact} /> },
  ]

  const handleMenuClick = (section: string) => {
    setActiveSection(section)
    if (sectionRefs[section] && sectionRefs[section].current) {
      sectionRefs[section].current.scrollIntoView({ behavior: "smooth" })
    }
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
      </main>
      <Footer />
    </div>
  )
}

export default App
