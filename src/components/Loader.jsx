import React from 'react'

const Loader = () => {
  return (
    <div className="flex space-x-2">
      <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce"></div>
      <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce delay-100"></div>
      <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce delay-200"></div>
    </div>
  )
}

export default Loader