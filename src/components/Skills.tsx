import React, { forwardRef, useState } from "react"

// Update the skill type to include the category
type Skill = {
  name: string
  type: string
  level: number
  color: string
  category: "Frontend" | "Backend" | "DevOps"
}

// Mock data for skills (replace this with your actual data)
const skills: Skill[] = [
  { name: "React", type: "Frontend", level: 90, color: "#61DAFB", category: "Frontend" },
  { name: "Node.js", type: "Backend", level: 85, color: "#339933", category: "Backend" },
  { name: "TypeScript", type: "Frontend", level: 88, color: "#3178C6", category: "Frontend" },
  { name: "Kubernetes", type: "DevOps", level: 75, color: "#326CE5", category: "DevOps" },
  { name: "AWS", type: "DevOps", level: 78, color: "#FF9900", category: "DevOps" },
  { name: "Next.js", type: "Frontend", level: 86, color: "#000000", category: "Frontend" },
  { name: "JavaScript", type: "frontend", level: 90, color: "#F0DB4F", category: "Frontend" },
  { name: "Vue.js", type: "frontend", level: 75, color: "#41B883", category: "Frontend" },
  { name: "CSS/SASS", type: "frontend", level: 85, color: "#CC6699", category: "Frontend" },
  { name: "TailwindCSS", type: "frontend", level: 90, color: "#06B6D4", category: "Frontend" },
  { name: "Node.js", type: "backend", level: 85, color: "#339933", category: "Backend" },
  { name: "Express", type: "backend", level: 80, color: "#000000", category: "Backend" },
  { name: "MongoDB", type: "backend", level: 75, color: "#47A248", category: "Backend" },
  { name: "PostgreSQL", type: "backend", level: 70, color: "#336791", category: "Backend" },
  { name: "GraphQL", type: "backend", level: 65, color: "#E10098", category: "Backend" },
  { name: "Docker", type: "devops", level: 70, color: "#2496ED", category: "DevOps" },
  { name: "Git", type: "devops", level: 85, color: "#F05032", category: "DevOps" },
]

const Skills = forwardRef<HTMLElement>((props, ref) => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  // Calculate the number of skills in each category
  const frontendSkills = skills.filter((skill) => skill.category === "Frontend").length
  const backendSkills = skills.filter((skill) => skill.category === "Backend").length
  const devopsSkills = skills.filter((skill) => skill.category === "DevOps").length

  // Calculate percentages for the pie chart (making backend larger)
  const total = frontendSkills + backendSkills + devopsSkills
  const frontendPercentage = (frontendSkills / total) * 80 // Reducing frontend percentage
  const backendPercentage = (backendSkills / total) * 140 // Increasing backend percentage
  const devopsPercentage = (devopsSkills / total) * 80 // Reducing devops percentage

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
              <circle cx="50" cy="50" r="45" fill="transparent" stroke="#4B5563" strokeWidth="10" />
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="transparent"
                stroke="url(#frontend-gradient)"
                strokeWidth="10"
                strokeDasharray={`${frontendPercentage} ${100 - frontendPercentage}`}
                strokeDashoffset="25"
              >
                <animate
                  attributeName="stroke-dasharray"
                  from="0 100"
                  to={`${frontendPercentage} ${100 - frontendPercentage}`}
                  dur="1s"
                  fill="freeze"
                />
              </circle>
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="transparent"
                stroke="url(#backend-gradient)"
                strokeWidth="10"
                strokeDasharray={`${backendPercentage} ${100 - backendPercentage}`}
                strokeDashoffset={-75 + frontendPercentage}
              >
                <animate
                  attributeName="stroke-dasharray"
                  from="0 100"
                  to={`${backendPercentage} ${100 - backendPercentage}`}
                  dur="1s"
                  fill="freeze"
                />
              </circle>
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="transparent"
                stroke="url(#devops-gradient)"
                strokeWidth="10"
                strokeDasharray={`${devopsPercentage} ${100 - devopsPercentage}`}
                strokeDashoffset={-75 + frontendPercentage + backendPercentage}
              >
                <animate
                  attributeName="stroke-dasharray"
                  from="0 100"
                  to={`${devopsPercentage} ${100 - devopsPercentage}`}
                  dur="1s"
                  fill="freeze"
                />
              </circle>
              <defs>
                <linearGradient id="frontend-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#60A5FA" />
                </linearGradient>
                <linearGradient id="backend-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="#34D399" />
                </linearGradient>
                <linearGradient id="devops-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#A78BFA" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold text-gradient bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                {skills.length}
              </span>
            </div>
          </div>
          <div className="flex justify-center mt-4 space-x-4">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full mr-2"></div>
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
