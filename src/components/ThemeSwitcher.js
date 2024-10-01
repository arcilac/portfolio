import React, { useEffect, useState } from "react"
import { FaMoon, FaSun } from "react-icons/fa"

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme") || "light"
    setDarkMode(currentTheme === "dark")
    document.body.classList.toggle("theme-dark", currentTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const newTheme = darkMode ? "light" : "dark"
    document.body.classList.toggle("theme-dark", newTheme === "dark")
    setDarkMode(!darkMode)
    localStorage.setItem("theme", newTheme)
  }

  return (
    <div className="theme-switcher">
      <button className="theme-switcher-button" onClick={toggleTheme}>
        {darkMode ? <FaSun className="theme-icon" /> : <FaMoon className="theme-icon" />}
      </button>
    </div>
  )
}

export default ThemeSwitcher
