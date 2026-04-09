import axios from 'axios'

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY
const CHANNEL_ID = import.meta.env.VITE_CHANNEL_ID

// Create axios instance with timeout and retry logic
const youtubeApi = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  timeout: 10000, // 10 second timeout
  headers: {
    'Content-Type': 'application/json',
  }
})

// Add retry logic
const retryRequest = async (fn, retries = 3) => {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn()
    } catch (error) {
      if (i === retries - 1) throw error
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)))
    }
  }
}

export const getChannelVideos = async (maxResults = 12) => {
  // Check if API key exists
  if (!API_KEY || API_KEY === 'YOUR_YOUTUBE_API_KEY_HERE') {
    console.error('YouTube API key is not configured')
    return getMockVideos(maxResults)
  }

  try {
    const response = await retryRequest(async () => {
      return await youtubeApi.get('/search', {
        params: {
          key: API_KEY,
          channelId: CHANNEL_ID,
          part: 'snippet,id',
          order: 'date',
          maxResults: maxResults,
          type: 'video',
        },
      })
    })
    
    // Fetch statistics for each video
    if (response.data.items && response.data.items.length > 0) {
      const videoIds = response.data.items.map(item => item.id.videoId).join(',')
      
      const statsResponse = await retryRequest(async () => {
        return await youtubeApi.get('/videos', {
          params: {
            key: API_KEY,
            id: videoIds,
            part: 'statistics',
          },
        })
      })
      
      // Combine video info with statistics
      const videos = response.data.items.map(item => {
        const stats = statsResponse.data.items.find(stat => stat.id === item.id.videoId)
        return {
          ...item,
          statistics: stats?.statistics || { viewCount: '0', likeCount: '0' },
        }
      })
      
      return videos
    }
    
    return []
  } catch (error) {
    console.error('Error fetching channel videos:', error.message)
    // Return mock data for development
    return getMockVideos(maxResults)
  }
}

export const getVideoDetails = async (videoId) => {
  if (!API_KEY || API_KEY === 'YOUR_YOUTUBE_API_KEY_HERE') {
    console.error('YouTube API key is not configured')
    return getMockVideoDetails(videoId)
  }

  try {
    const response = await retryRequest(async () => {
      return await youtubeApi.get('/videos', {
        params: {
          key: API_KEY,
          id: videoId,
          part: 'snippet,statistics',
        },
      })
    })
    return response.data.items[0]
  } catch (error) {
    console.error('Error fetching video details:', error.message)
    return getMockVideoDetails(videoId)
  }
}

export const searchVideos = async (query, maxResults = 20) => {
  if (!API_KEY || API_KEY === 'YOUR_YOUTUBE_API_KEY_HERE') {
    console.error('YouTube API key is not configured')
    return getMockVideos(maxResults)
  }

  try {
    const response = await retryRequest(async () => {
      return await youtubeApi.get('/search', {
        params: {
          key: API_KEY,
          channelId: CHANNEL_ID,
          q: query,
          part: 'snippet,id',
          maxResults: maxResults,
          type: 'video',
        },
      })
    })
    return response.data.items
  } catch (error) {
    console.error('Error searching videos:', error.message)
    return []
  }
}

// Mock data for development/testing
const getMockVideos = (count) => {
  const mockVideos = []
  for (let i = 1; i <= count; i++) {
    mockVideos.push({
      id: { videoId: `mock-video-${i}` },
      snippet: {
        title: `Programming Tutorial ${i}: Learn to Code`,
        description: `This is a comprehensive programming tutorial for beginners. Learn ${i === 1 ? 'JavaScript' : i === 2 ? 'Python' : 'React'} from scratch.`,
        thumbnails: {
          high: { url: `https://picsum.photos/480/360?random=${i}` },
          default: { url: `https://picsum.photos/120/90?random=${i}` }
        },
        publishedAt: new Date(Date.now() - i * 86400000).toISOString()
      },
      statistics: {
        viewCount: Math.floor(Math.random() * 50000).toString(),
        likeCount: Math.floor(Math.random() * 5000).toString()
      }
    })
  }
  return mockVideos
}

const getMockVideoDetails = (videoId) => {
  return {
    id: videoId,
    snippet: {
      title: 'Complete Programming Tutorial',
      description: 'Learn programming from basics to advanced. This tutorial covers everything you need to know to become a professional developer.',
      publishedAt: new Date().toISOString()
    },
    statistics: {
      viewCount: '10000',
      likeCount: '500'
    }
  }
}