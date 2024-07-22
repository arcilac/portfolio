import React from "react"
import Header from "./components/Header"
import About from "./components/About"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Footer from "./components/Footer"
import Background from "./components/Background"
import Lead from "./components/Lead"
import "./App.css"
import ThemeSwitcher from "./components/ThemeSwitcher"

function App() {
  return (
    <div>
      <Header />
      <ThemeSwitcher />
      <Lead />
      <About />
      <Background />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Footer />
    </div>
  )
}

export default App
