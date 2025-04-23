import React from "react"
import { Button } from "../components/ui/button.tsx"
import { Input } from "../components/ui/input.tsx"
import { Textarea } from "../components/ui/textArea.tsx"
import { Mail, Phone } from "lucide-react"

const Contact = () => {
  const [status, setStatus] = React.useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    try {
      const response = await fetch("https://formspree.io/f/mqkrwlzz", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      })
      if (response.ok) {
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch (error) {
      setStatus("error")
    }
  }

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center py-20 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="w-full max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-center text-gradient bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
          Contact Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-yellow-300">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="bg-gray-700 text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  className="bg-gray-700 text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  className="bg-gray-700 text-white"
                  rows={4}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-pink-500 hover:from-yellow-500 hover:to-pink-600 text-white"
              >
                Send Message
              </Button>
              {status === "success" && <p className="text-green-500">Thanks for your message!</p>}
              {status === "error" && (
                <p className="text-red-500">
                  There was an error sending your message. Please try again.
                </p>
              )}
            </form>
          </div>
          <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-yellow-300">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="text-pink-500" />
                <a
                  href="mailto:arcilacamila08@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  arcilacamila08@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-pink-500" />
                <a
                  href="https://wa.me/+573113871055"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +57 (311) 387-1055
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
