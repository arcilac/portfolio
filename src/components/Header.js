import React from "react"
import ThemeSwitcher from "./ThemeSwitcher"
import "../assets/css/styles.css"

const Header = ({ onContactClick }) => {
  const handleContactClick = (e) => {
    onContactClick()
  }

  return (
    <header>
      <ThemeSwitcher />
      <ul id="menu" className="shadow">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#background">Background</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contact" onClick={handleContactClick}>
            Contact
          </a>
        </li>
      </ul>
    </header>
  )
}

export default Header
