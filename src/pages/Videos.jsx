import React, { useState, useEffect } from 'react'
import VideoGrid from '../components/VideoGrid'
import { getChannelVideos } from '../services/youtubeAPI'

const Videos = () => {
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchAllVideos = async () => {
      try {
        const allVideos = await getChannelVideos(50)
        setVideos(allVideos)
      } catch (error) {
        console.error('Error fetching videos:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchAllVideos()
  }, [])

  const filteredVideos = videos.filter(video =>
    video.snippet.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="pt-24 pb-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            All <span className="gradient-text">Tutorials</span>
          </h1>
          <div className="w-20 h-1 bg-red-500 mx-auto"></div>
          <p className="text-gray-400 mt-4">Browse through our complete collection of programming tutorials</p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12">
          <input
            type="text"
            placeholder="Search videos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-3 bg-card rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {filteredVideos.length === 0 && !loading ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No videos found</p>
          </div>
        ) : (
          <VideoGrid videos={filteredVideos} loading={loading} />
        )}
      </div>
    </div>
  )
}

export default Videos