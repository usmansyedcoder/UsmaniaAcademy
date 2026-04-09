import React from 'react'
import { Link } from 'react-router-dom'
import { FaYoutube, FaGithub, FaTwitter, FaLinkedin, FaCode, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-sm border-t border-gray-800 py-12 mt-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FaCode className="text-2xl text-red-500" />
              <span className="text-xl font-bold">Usmania Academy</span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering developers with quality programming education for free.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-red-500 transition">Home</Link></li>
              <li><Link to="/videos" className="hover:text-red-500 transition">Videos</Link></li>
              <li><Link to="/about" className="hover:text-red-500 transition">About</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-red-500 transition">Blog</a></li>
              <li><a href="#" className="hover:text-red-500 transition">Source Code</a></li>
              <li><a href="#" className="hover:text-red-500 transition">Community</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://youtube.com/@UsmaniaAcademy" target="_blank" className="text-gray-400 hover:text-red-500 transition text-2xl">
                <FaYoutube />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition text-2xl">
                <FaGithub />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition text-2xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition text-2xl">
                <FaLinkedin />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition text-2xl">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Usmania Academy. All rights reserved. Made with ❤️ for learners.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer