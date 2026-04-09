import React from 'react'
import VideoCard from './VideoCard'
import Loader from './Loader'

const VideoGrid = ({ videos, loading, title }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader />
      </div>
    )
  }

  return (
    <div>
      {title && (
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <div className="w-20 h-1 bg-red-500 mx-auto"></div>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <VideoCard key={video.id?.videoId || video.id || index} video={video} />
        ))}
      </div>
    </div>
  )
}

export default VideoGrid