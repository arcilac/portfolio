import React from "react"
import "../assets/css/styles.css"

const Contact = () => {
  return (
    <div id="contact">
      <h2>Get in Touch</h2>
      <div id="contact-form">
        <form action="https://formspree.io/f/mqkrwlzz" method="POST">
          <input type="hidden" name="_subject" value="Contact request from personal website" />
          <input type="email" name="_replyto" placeholder="Your email" required />
          <textarea name="message" placeholder="Your message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
