"use client"

import { useState } from "react"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thanks for your message! I'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section className="py-20 px-4 md:px-8 bg-black" id="contact">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Get In Touch</h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out to me using the form below or through my
            social media channels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-white">Contact Information</h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <span className="h-5 w-5 text-purple-500 mt-1 mr-3">✉️</span>
                <div>
                  <h4 className="font-medium text-white">Email</h4>
                  <p className="text-gray-300">your.email@example.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="h-5 w-5 text-purple-500 mt-1 mr-3">📞</span>
                <div>
                  <h4 className="font-medium text-white">Phone</h4>
                  <p className="text-gray-300">(123) 456-7890</p>
                </div>
              </div>

              <div className="flex items-start">
                <span className="h-5 w-5 text-purple-500 mt-1 mr-3">📍</span>
                <div>
                  <h4 className="font-medium text-white">Location</h4>
                  <p className="text-gray-300">City, State, Country</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-medium mb-3 text-white">Connect with me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Dhanvin1520"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-purple-500 transition-colors"
                >
                  <img 
                    src="/images/github-icon.png" 
                    alt="GitHub" 
                    className="h-6 w-6 inline-block" 
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/dhanvin-vadlamudi-365614318/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-purple-500 transition-colors"
                >
                  <img 
                    src="/images/linkedin-icon.png" 
                    alt="LinkedIn" 
                    className="h-6 w-6 inline-block" 
                  />
                </a>
                <a
                  href="https://www.instagram.com/dhanvin_1520/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-purple-500 transition-colors"
                >
                  <img 
                    src="/images/instagram-icon.png" 
                    alt="Instagram" 
                    className="h-6 w-6 inline-block" 
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6 text-white">Send Me a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-300">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-300">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center transition-colors"
              >
                <span className="w-4 h-4 mr-2 inline-block">✉️</span>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact