import React from "react"
import { Github } from "lucide-react"
import { Button } from "./ui/button.tsx"

interface MenuProps {
  activeSection: string
  onMenuClick: (section: string) => void
}

const Menu: React.FC<MenuProps> = ({ activeSection, onMenuClick }) => {
  const menuItems = ["Home", "Projects", "About", "Education", "Experience", "Skills", "Contact"]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-70 backdrop-filter backdrop-blur-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-white font-bold text-lg">
              Camila Arcila
            </a>
          </div>
          <div className="flex items-center">
            <ul className="flex space-x-4">
              {menuItems.map((item) => (
                <li key={item}>
                  <Button
                    variant="ghost"
                    className={`text-sm hover:text-gray-300 transition-colors ${
                      activeSection === item.toLowerCase()
                        ? "text-gradient bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent"
                        : "text-white"
                    }`}
                    onClick={() => onMenuClick(item.toLowerCase())}
                  >
                    {item}
                  </Button>
                </li>
              ))}
            </ul>
            <a
              href="https://github.com/Arcilac"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4"
            >
              <Github className="w-6 h-6 text-white hover:text-gray-300 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Menu
