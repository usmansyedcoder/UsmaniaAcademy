import React from 'react'
import { FaPython, FaJs, FaReact, FaDatabase, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { SiTailwindcss, SiMongodb, SiNodedotjs } from 'react-icons/si'

const CourseSection = () => {
  const courses = [
    { name: 'Python', icon: <FaPython />, color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
    { name: 'JavaScript', icon: <FaJs />, color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
    { name: 'React.js', icon: <FaReact />, color: 'text-blue-400', bg: 'bg-blue-400/10' },
    { name: 'Node.js', icon: <SiNodedotjs />, color: 'text-green-500', bg: 'bg-green-500/10' },
    { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-400', bg: 'bg-green-400/10' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
    { name: 'HTML5', icon: <FaHtml5 />, color: 'text-orange-500', bg: 'bg-orange-500/10' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { name: 'SQL', icon: <FaDatabase />, color: 'text-purple-500', bg: 'bg-purple-500/10' },
  ]

  return (
    <div className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What You'll Learn</h2>
        <div className="w-20 h-1 bg-red-500 mx-auto"></div>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Comprehensive courses covering modern programming languages and technologies
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className={`${course.bg} backdrop-blur-sm rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300 group cursor-pointer`}
          >
            <div className={`${course.color} text-4xl mb-3 flex justify-center group-hover:animate-bounce`}>
              {course.icon}
            </div>
            <h3 className="font-semibold text-white">{course.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CourseSection