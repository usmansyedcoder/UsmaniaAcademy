import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaCode, FaBars, FaTimes, FaYoutube } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/videos', name: 'Videos' },
    { path: '/about', name: 'About' },
  ]

  return (
    <nav className="bg-black/90 backdrop-blur-md fixed w-full z-50 border-b border-gray-800">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <FaCode className="text-2xl text-red-500 group-hover:rotate-180 transition-transform duration-500" />
            <span className="text-xl font-bold">
              Usmania <span className="text-red-500">Academy</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-gray-300 hover:text-red-500 transition-colors duration-300 ${
                    isActive ? 'text-red-500 border-b-2 border-red-500' : ''
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <a
              href="https://youtube.com/@UsmaniaAcademy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <FaYoutube className="text-white" />
              <span>Subscribe</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-2xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-2 text-gray-300 hover:text-red-500 transition-colors ${
                    isActive ? 'text-red-500' : ''
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <a
              href="https://youtube.com/@UsmaniaAcademy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full mt-4 justify-center"
            >
              <FaYoutube />
              <span>Subscribe</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar