import React from 'react'

const VideoItem = (props) => {

  const { id, snippet } = props.video

  console.log(props)
  return (
    <div key={id} className="ui card" style={{marginTop: '20px'}}>
      <div className="image">
        <img src={snippet.thumbnails.medium.url} />
      </div>
      <div className="content">
        <a className="header">{snippet.title}</a>
        <div className="meta">
          <span className="date">{snippet.publishedAt}</span>
        </div>
        <div className="description">
          {snippet.description}
        </div>
      </div>
    </div>
  )
}

export default VideoItem