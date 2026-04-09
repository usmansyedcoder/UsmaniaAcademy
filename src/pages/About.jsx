import React from 'react'
import { FaChalkboardTeacher, FaLaptopCode, FaUsers, FaAward } from 'react-icons/fa'

const About = () => {
  const features = [
    { icon: <FaChalkboardTeacher />, title: 'Expert Instructors', desc: 'Learn from industry professionals with years of experience' },
    { icon: <FaLaptopCode />, title: 'Practical Projects', desc: 'Build real-world projects that showcase your skills' },
    { icon: <FaUsers />, title: 'Community Support', desc: 'Join our growing community of developers' },
    { icon: <FaAward />, title: 'Certificates', desc: 'Earn certificates upon course completion' },
  ]

  return (
    <div className="pt-24 pb-20">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Usmania Academy</span>
          </h1>
          <div className="w-20 h-1 bg-red-500 mx-auto"></div>
        </div>

        {/* Mission Section */}
        <div className="bg-card rounded-2xl p-8 mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              At Usmania Academy, we believe that quality programming education should be accessible to everyone. 
              Our mission is to empower aspiring developers with the skills they need to succeed in the tech industry, 
              completely free of charge.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-card rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-red-500 text-4xl mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '200+', label: 'Video Tutorials' },
            { number: '50K+', label: 'Students' },
            { number: '30+', label: 'Hours of Content' },
            { number: '10+', label: 'Courses' },
          ].map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-red-600/20 to-purple-600/20 rounded-xl p-6 text-center backdrop-blur-sm">
              <div className="text-3xl font-bold text-red-500 mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About