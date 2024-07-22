// import React from "react"
// import "../assets/css/styles.css"

// function About() {
//   return (
//     <div id="about">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-4">
//             <h2 className="heading">About Me</h2>
//             <img className="profile-img" src="./images/photo.jpg" alt="" />
//           </div>
//           <div className="col-md-8">
//             <p>
//               Hi! I'm Camila Arcila Sanchez, passionate about programming and software development.
//               Since I was very young, I have always been fascinated by the world of technology and
//               how it can transform our lives. My goal is to create innovative solutions that make a
//               difference and improve user experience. I have acquired skills in several areas,
//               including: Frontend and backend web development. Mobile application design and
//               creation. Teamwork. I love taking on new challenges and constantly learning. I am
//               always looking for opportunities to expand my knowledge and explore new technologies.
//               In addition, I consider myself a creative, detail-oriented and results-driven person.
//               I am experienced Front-End Developer specialized in crafting engaging user interfaces
//               with React. Proven track record in developing responsive, high-performance web
//               applications. Skilled in leveraging modern development tools and methodologies to
//               deliver seamless user experiences. Passionate about optimizing Ul for maximum
//               efficiency and scalability. Committed to continuous learning and applying best
//               practices in front-end architecture. I am excited for the opportunity to collaborate
//               on interesting projects and contribute to the growth of your team or company. If you
//               are looking for someone committed, proactive and passionate about technology, don't
//               hesitate to contact me! I look forward to meeting you soon!
//               {/* More content here */}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default About

import React from "react"
import "../assets/css/styles.css"
import profileImage from "../assets/images/photo.jpg"

const About = () => {
  return (
    <div id="about">
      <div className="container">
        <h2 className="headingAb">About Me</h2>
        <div className="about-content">
          <div className="profile-image">
            <img src={profileImage} alt="Profile" className="profile-img" />
          </div>
          <div className="text-content">
            <p>
              Hi! I'm Camila Arcila Sanchez, passionate about programming and software development.
              Since I was very young, I have always been fascinated by the world of technology and
              how it can transform our lives. My goal is to create innovative solutions that make a
              difference and improve user experience.
            </p>
            <p>
              I have acquired skills in several areas, including frontend and backend web
              development, mobile application design, and teamwork. I love taking on new challenges
              and constantly learning. I am always looking for opportunities to expand my knowledge
              and explore new technologies.
            </p>
            <p>
              I am excited for the opportunity to collaborate on interesting projects and contribute
              to the growth of your team or company. If you are looking for someone committed,
              proactive, and passionate about technology, don't hesitate to contact me!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
