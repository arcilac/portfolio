import React, { forwardRef, useState } from "react"
import { skills } from "../data/skills.ts"

const Skills = forwardRef<HTMLElement>((props, ref) => {
  const [hoveredSkill, setHoveredSkill] = useState(null)

  return (
    <section
      ref={ref}
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center py-20 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <h2 className="text-4xl font-bold mb-12 text-gradient bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Skills
      </h2>
      <div className="w-full max-w-4xl">
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-center text-gradient bg-gradient-to-r from-green-300 to-blue-500 bg-clip-text text-transparent">
            Technical Proficiency
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="relative p-4 transform transition-all duration-300 hover:scale-105"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="text-lg font-semibold mb-2" style={{ color: skill.color }}>
                  {skill.name}
                </div>
                <svg className="w-full h-2" viewBox="0 0 100 2">
                  <defs>
                    <linearGradient id={`gradient-${skill.name}`} x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor={skill.color} />
                      <stop offset="100%" stopColor={`${skill.color}88`} />
                    </linearGradient>
                  </defs>
                  <rect width="100" height="2" fill="#4B5563" />
                  <rect width={skill.level} height="2" fill={`url(#gradient-${skill.name})`}>
                    <animate
                      attributeName="width"
                      from="0"
                      to={skill.level}
                      dur="1s"
                      begin="0s"
                      fill="freeze"
                    />
                  </rect>
                  {hoveredSkill === skill.name && (
                    <g>
                      <rect
                        x={skill.level - 16}
                        y="-14"
                        width="32"
                        height="18"
                        rx="4"
                        fill={skill.color}
                      />
                      <text
                        x={skill.level}
                        y="-2"
                        textAnchor="middle"
                        fill="white"
                        fontSize="10"
                        fontWeight="bold"
                      >
                        {skill.level}%
                      </text>
                    </g>
                  )}
                </svg>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4 text-center text-gradient bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Skill Distribution
          </h3>
          <div className="relative w-64 h-64 mx-auto">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* ... (SVG code for skill distribution chart) ... */}
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold text-gradient bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                {skills.length}
              </span>
            </div>
          </div>
          <div className="flex justify-center mt-4 space-x-4">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mr-2"></div>
              <span>Frontend</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-green-600 rounded-full mr-2"></div>
              <span>Backend</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full mr-2"></div>
              <span>DevOps</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

Skills.displayName = "Skills"

export default Skills
