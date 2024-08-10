import React from "react"
import "../assets/css/styles.css"
import { FaPhone, FaWhatsapp, FaEnvelope, FaGithub } from "react-icons/fa"

const Contact = () => {
  return (
    <div id="contact-section">
      <h2 className="heading">Contact Me</h2>
      <p>If you have any questions or would like to get in touch, please reach out to me!</p>

      <div className="contact-info">
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <p>Phone Number</p>
        </div>
        <div className="contact-item">
          <FaWhatsapp className="contact-icon" />
          <p>WhatsApp Number</p>
        </div>
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <p>arcilacamila08@gmail.com</p>
        </div>
        <div className="contact-item">
          <FaGithub className="contact-icon" />
          <p>
            <a href="https://github.com/Arcilac">https://github.com/Arcilac</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact

// import React from "react"
// import "../assets/css/styles.css"

// const Contact = () => {
//   return (
//     <div id="contact">
//       <h2>Get in Touch</h2>
//       <div id="contact-form">
//         <form action="https://formspree.io/f/mqkrwlzz" method="POST">
//           <input type="hidden" name="_subject" value="Contact request from personal website" />
//           <input type="email" name="_replyto" placeholder="Your email" required />
//           <textarea name="message" placeholder="Your message" required></textarea>
//           <button type="submit">Send</button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Contact
