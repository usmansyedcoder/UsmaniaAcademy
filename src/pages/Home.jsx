import React, { useState, useEffect } from 'react'
import Hero from '../components/Hero'
import VideoGrid from '../components/VideoGrid'
import CourseSection from '../components/CourseSection'
import { getChannelVideos } from '../services/youtubeAPI'

const Home = () => {
  const [recentVideos, setRecentVideos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const videos = await getChannelVideos(6)
        setRecentVideos(videos)
      } catch (error) {
        console.error('Error fetching videos:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchVideos()
  }, [])

  return (
    <div>
      <Hero />
      <div className="container-custom py-20">
        <VideoGrid 
          videos={recentVideos} 
          loading={loading} 
          title="Latest Tutorials"
        />
        <div className="text-center mt-12">
          <a 
            href="/videos"
            className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full transition-all duration-300"
          >
            <span>View All Videos</span>
            <span>→</span>
          </a>
        </div>
      </div>
      <CourseSection />
    </div>
  )
}

export default Home