import React from 'react'
import { Link } from 'react-router-dom'
import { FaPlay, FaYoutube, FaCode } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-purple-600/5 to-blue-600/10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="container-custom relative z-10 py-20">
        <div className="text-center">
          {/* Animated Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 animate-bounce">
            <FaCode className="text-red-500 animate-spin-slow" />
            <span className="text-sm">Start Your Coding Journey Today!</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Learn Programming With
            <span className="gradient-text block mt-2">
              <TypeAnimation
                sequence={[
                  'Usmania Academy',
                  2000,
                  'Expert Instructors',
                  2000,
                  'Practical Projects',
                  2000,
                  'Career Ready Skills',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-10">
            Master programming languages, web development, and software engineering 
            through comprehensive video tutorials. Start your coding journey today with 
            <span className="text-red-500 font-semibold"> 200+ free tutorials!</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/videos"
              className="inline-flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 group"
            >
              <FaPlay className="group-hover:animate-pulse" />
              <span>Watch Videos</span>
            </Link>
            <a
              href="https://youtube.com/@UsmaniaAcademy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 border-2 border-red-600 hover:bg-red-600/20 px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              <FaYoutube />
              <span>Subscribe Channel</span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-gray-800">
            {[
              { number: '200+', label: 'Video Tutorials', icon: '🎥' },
              { number: '50K+', label: 'Students', icon: '👨‍🎓' },
              { number: '30+', label: 'Hours of Content', icon: '⏱️' },
              { number: '4.9', label: 'Rating', icon: '⭐' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-red-500">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero