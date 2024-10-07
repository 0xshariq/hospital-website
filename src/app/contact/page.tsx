'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Trash2, Phone, Mail, MapPin } from "lucide-react"
import { toast } from "sonner"

export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const mailtoLink = `mailto:extracaremedicalcenter16@gmail.com?subject=New Contact Form Submission&body=Name: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0AMessage: ${encodeURIComponent(message)}`
    
    window.location.href = mailtoLink
    
    toast.success("Email client opened with your message. Please send the email to complete the process.")
    handleReset()
  }

  const handleReset = () => {
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl w-full"
      >
        <div className="flex flex-col md:flex-row">
          <div className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white p-10 md:w-2/5">
            <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-white bg-opacity-20 p-3 rounded-full">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="text-lg">+971 58 585 5829</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-white bg-opacity-20 p-3 rounded-full">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-lg">extracaremedicalcenter16@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-white bg-opacity-20 p-3 rounded-full">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="text-lg">Al Nahel tower, National Bank of Oman bldg, beside Nissan Showroom, Najda street , Abu Dhabi</span>
              </div>
            </div>
          </div>
          <div className="p-10 md:w-3/5">
            <form onSubmit={handleSubmit} onReset={handleReset} className="space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 text-gray-700 bg-gray-100 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 text-gray-700 bg-gray-100 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  id="message"
                  className="w-full px-4 py-3 text-gray-700 bg-gray-100 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500"
                  rows={4}
                  placeholder="How can we assist you?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <div className="flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-6 rounded-lg hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors duration-300 flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="reset"
                  className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-300 flex items-center justify-center"
                >
                  <Trash2 className="w-5 h-5 mr-2" />
                  Clear Form
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  )
}