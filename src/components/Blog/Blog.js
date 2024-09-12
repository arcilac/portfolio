import React, { useState } from "react"
import { Parallax } from "react-scroll-parallax"
import Prisma from "./Prisma"

const Blog = () => {
  const [showPrisma, setShowPrisma] = useState(false)

  const togglePrisma = () => {
    setShowPrisma(!showPrisma)
  }

  return (
    <div id="blog">
      <h2 className="heading">Blog</h2>
      <div className="blog-entry">
        <h3 onClick={togglePrisma} style={{ cursor: "pointer" }}>
          Differences and how to use the npx prisma commands
        </h3>
        {showPrisma && (
          <Parallax scale={[1, 1.2]}>
            <div className="prisma-content">
              <Prisma />
            </div>
          </Parallax>
        )}
      </div>
    </div>
  )
}

export default Blog
