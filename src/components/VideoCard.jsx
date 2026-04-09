import React from 'react'
import { Link } from 'react-router-dom'
import { FaPlay, FaClock, FaEye } from 'react-icons/fa'

const VideoCard = ({ video }) => {
  const { id, snippet, statistics } = video
  const videoId = id?.videoId || id
  const views = statistics?.viewCount 
    ? parseInt(statistics.viewCount).toLocaleString() 
    : 'N/A'

  return (
    <Link to={`/video/${videoId}`} className="group">
      <div className="bg-card rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20">
        {/* Thumbnail */}
        <div className="relative overflow-hidden">
          <img
            src={snippet.thumbnails?.high?.url || snippet.thumbnails?.default?.url}
            alt={snippet.title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <FaPlay className="text-5xl text-white" />
          </div>
          <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs">
            <FaClock className="inline mr-1" />
            Watch Now
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-white mb-2 line-clamp-2 group-hover:text-red-500 transition-colors">
            {snippet.title}
          </h3>
          <p className="text-gray-400 text-sm line-clamp-2 mb-3">
            {snippet.description}
          </p>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2 text-gray-400">
              <FaEye className="text-xs" />
              <span>{views} views</span>
            </div>
            <div className="text-gray-400 text-xs">
              {new Date(snippet.publishedAt).toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default VideoCard