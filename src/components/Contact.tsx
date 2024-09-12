import React from "react"
import { X } from "lucide-react"
import { Button } from "../components/ui/button.tsx"

interface ContactProps {
  onClose: () => void
}

const Contact: React.FC<ContactProps> = ({ onClose }) => {
  return (
    <section
      id="contact"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-filter backdrop-blur-sm"
    >
      <div className="bg-gray-900 p-8 rounded-lg shadow-xl max-w-md w-full relative">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 text-gray-400 hover:text-white"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
          <span className="sr-only">Close</span>
        </Button>
        <h2 className="text-3xl font-bold mb-6 text-gradient bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
          Contact
        </h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              required
            ></textarea>
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded transition-colors transform hover:scale-105"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  )
}

export default Contact
