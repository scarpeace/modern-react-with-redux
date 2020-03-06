import React from 'react'
import VideoItem from "./VideoItem"

const VideoList = ({videos}) => {

  const videos = videos.map(video => {
    return (
      <div key={video.id.videoId} >
        <VideoItem video={video} />
      </div>
    )
  })

  return (<div className="ui container">{videos}</div>)
}

export default VideoList;