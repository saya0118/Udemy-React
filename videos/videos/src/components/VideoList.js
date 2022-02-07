import React from 'react'
import VideoItems from './VideoItems'

const VideoList = ({videos, onVideoSelect}) => {
    const renderedList = videos.map((video) => {
        return <VideoItems key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>
    })
    return <div className='ui relaxed divided list'>{videos.length}</div>
}

export default VideoList