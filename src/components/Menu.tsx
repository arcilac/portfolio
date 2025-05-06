import React from "react"
import { Github } from "lucide-react"
import { Button } from "../components/ui/button.tsx"

interface MenuProps {
  activeSection: string
  onMenuClick: (section: string) => void
}

const DynamicIslandMenu: React.FC<MenuProps> = ({ activeSection, onMenuClick }) => {
  const menuItems = ["Home", "Projects", "About", "Education", "Experience", "Skills", "Contact"]
  
  
  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-none">
      {" "}
      {/* Ancho 90% de la pantalla */}
      <nav className="bg-black bg-opacity-40 backdrop-filter backdrop-blur-lg rounded-full border border-white border-opacity-20 shadow-lg">
        <div className="px-8 py-3">
          <div className="flex items-center justify-between">
            <a href="#" className="text-white font-bold text-lg mr-8">
              Camila Arcila
            </a>
            <div className="flex items-center space-x-2">
              {menuItems.map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  size="sm"
                  className={`text-sm hover:text-gray-300 transition-colors ${
                    activeSection === item.toLowerCase()
                      ? "text-gradient bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent"
                      : "text-white"
                  }`}
                  onClick={() => onMenuClick(item.toLowerCase())}
                >
                  {item}
                </Button>
              ))}
              
              {/* Blog como enlace externo específico */}
              <a
                href="https://arcilac.github.io/my-blog/blog/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className={`text-sm hover:text-gray-300 transition-colors ${
                    activeSection === "blog"
                      ? "text-gradient bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent"
                      : "text-white"
                  }`}
                >
                  Blog
                </Button>
              </a>
              
              <a
                href="https://github.com/Arcilac"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4"
              >
                <Github className="w-5 h-5 text-white hover:text-gray-300 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default DynamicIslandMenu
