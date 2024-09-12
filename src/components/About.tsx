import React, { forwardRef, useState, useEffect } from "react"

const About = forwardRef<HTMLElement>((props, ref) => {
  const [colorfulWord, setColorfulWord] = useState({ text: "", color: "" })

  useEffect(() => {
    const words = ["innovative", "creative", "efficient", "reliable", "passionate"]
    const colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#F7DC6F", "#B8E986"]
    let colorIndex = 0

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * words.length)
      setColorfulWord({ text: words[randomIndex], color: colors[colorIndex] })
      colorIndex = (colorIndex + 1) % colors.length
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      ref={ref}
      id="about"
      className="min-h-screen flex flex-col justify-center items-center py-20 bg-gradient-to-b from-black to-gray-900 text-white"
    >
      <h2 className="text-4xl font-bold mb-12 text-gradient bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
        About Me
      </h2>
      <div className="max-w-2xl text-center">
        <p className="mb-6 text-lg">
          I'm a{" "}
          <span style={{ color: colorfulWord.color }} className="font-bold animate-pulse">
            {colorfulWord.text}
          </span>{" "}
          fullstack web developer with a passion for creating efficient and user-friendly
          applications. With over 5 years of experience in the industry, I've honed my skills in
          both front-end and back-end technologies, always striving to stay at the forefront of web
          development trends.
        </p>
        <p className="mb-6 text-lg">
          My approach to development is holistic – I believe in creating solutions that not only
          meet technical requirements but also provide an exceptional user experience. I'm
          particularly interested in projects that challenge me to learn new technologies and push
          the boundaries of what's possible on the web.
        </p>
        <p className="mb-6 text-lg">
          I have acquired skills in several areas, including frontend and backend web development,
          mobile application design, and teamwork. I love taking on new challenges and constantly
          learning. I am always looking for opportunities to expand my knowledge and explore new
          technologies.
        </p>
        <p className="mb-6 text-lg">
          I am excited for the opportunity to collaborate on interesting projects and contribute to
          the growth of your team or company. If you are looking for someone committed, proactive,
          and passionate about technology, don't hesitate to contact me!
        </p>
      </div>
    </section>
  )
})

About.displayName = "About"

export default About
