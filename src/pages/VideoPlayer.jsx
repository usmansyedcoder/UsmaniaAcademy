import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaArrowLeft, FaThumbsUp, FaEye, FaCalendar, FaShare } from 'react-icons/fa'
import { getVideoDetails, getChannelVideos } from '../services/youtubeAPI'
import VideoCard from '../components/VideoCard'

const VideoPlayer = () => {
  const { id } = useParams()
  const [video, setVideo] = useState(null)
  const [relatedVideos, setRelatedVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        setLoading(true)
        const videoData = await getVideoDetails(id)
        
        if (!videoData) {
          setError('Video not found')
          return
        }
        
        setVideo(videoData)
        
        // Fetch related videos
        const allVideos = await getChannelVideos(10)
        setRelatedVideos(allVideos.filter(v => (v.id?.videoId || v.id) !== id))
      } catch (error) {
        console.error('Error fetching video:', error)
        setError('Failed to load video')
      } finally {
        setLoading(false)
      }
    }
    
    if (id) {
      fetchVideo()
    }
    window.scrollTo(0, 0)
  }, [id])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading video...</p>
        </div>
      </div>
    )
  }

  if (error || !video) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold mb-4">{error || 'Video not found'}</h2>
          <Link to="/videos" className="text-red-500 hover:underline inline-flex items-center gap-2">
            <FaArrowLeft /> Back to Videos
          </Link>
        </div>
      </div>
    )
  }

  // Create embed URL for YouTube iframe
  const embedUrl = `https://www.youtube.com/embed/${id}?autoplay=0&rel=0&modestbranding=1&showinfo=0&controls=1`

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="container-custom">
        {/* Back Button */}
        <Link 
          to="/videos" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-red-500 mb-6 transition-colors duration-300 group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Videos</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Video Section */}
          <div className="lg:col-span-2">
            {/* YouTube Iframe Player - No external dependencies */}
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl bg-black">
              <iframe
                src={embedUrl}
                title={video.snippet?.title || "YouTube video player"}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            
            {/* Video Info */}
            <div className="mt-6">
              <h1 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                {video.snippet?.title}
              </h1>
              
              {/* Video Stats */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-gray-800">
                <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                  <div className="flex items-center gap-2">
                    <FaEye className="text-red-500" />
                    <span>{parseInt(video.statistics?.viewCount || 0).toLocaleString()} views</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaThumbsUp className="text-red-500" />
                    <span>{parseInt(video.statistics?.likeCount || 0).toLocaleString()} likes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-red-500" />
                    <span>{new Date(video.snippet?.publishedAt).toLocaleDateString()}</span>
                  </div>
                </div>
                
                {/* Share Button */}
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href)
                    alert('Link copied to clipboard!')
                  }}
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
                >
                  <FaShare />
                  <span className="text-sm">Share</span>
                </button>
              </div>
              
              {/* Description */}
              <div className="bg-card rounded-xl p-6 mt-4">
                <h3 className="font-semibold text-white mb-3">Description</h3>
                <p className="text-gray-300 whitespace-pre-wrap leading-relaxed">
                  {video.snippet?.description || 'No description available.'}
                </p>
              </div>
            </div>
          </div>

          {/* Related Videos Sidebar */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
              <span className="w-1 h-6 bg-red-500 rounded-full"></span>
              More Tutorials
            </h3>
            <div className="space-y-4 max-h-[600px] overflow-y-auto custom-scrollbar">
              {relatedVideos.length > 0 ? (
                relatedVideos.map((relatedVideo) => (
                  <VideoCard key={relatedVideo.id?.videoId || relatedVideo.id} video={relatedVideo} />
                ))
              ) : (
                <div className="text-center text-gray-400 py-8">
                  <p>No related videos found</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1a1a1a;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #ff0000;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cc0000;
        }
      `}</style>
    </div>
  )
}

export default VideoPlayer