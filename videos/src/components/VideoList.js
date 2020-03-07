import React from 'react'
import VideoItem from "./VideoItem"

const VideoList = ({videos, onVideoSelect}) => {

  const renderedList = videos.map(video => {
    return (
      <div key={video.id.videoId} >
        <div></div>
        <VideoItem video={video} onVideoSelect = {onVideoSelect}/>
      </div>
    )
  })

  return (<div className="ui relaxed divided list">{renderedList}</div>)
}

export default VideoList;