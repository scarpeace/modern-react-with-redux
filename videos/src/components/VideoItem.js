import React from 'react'

import './VideoItem.css'

const VideoItem = ({ video, onVideoSelect }) => {

  const { snippet } = video
  
  return (
    <div onClick={() => {onVideoSelect(video)}} className="video-item item">
      <img className="ui image" src={snippet.thumbnails.medium.url} alt="" />
      <div className="content">
        <div className="header">{snippet.title}</div>
      </div>
    </div>
  )
}

export default VideoItem