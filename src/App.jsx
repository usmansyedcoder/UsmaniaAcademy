import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Videos from './pages/Videos'
import VideoPlayer from './pages/VideoPlayer'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark via-darker to-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/video/:id" element={<VideoPlayer />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App