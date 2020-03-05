import React from 'react'
import "./ImageList.css"
import ImageCard from "./ImageCard"

const ImageList = (props) => {

  const images = props.photos.map((image) => {
    return <ImageCard key={image.id} image={image}/>
  })

  return <div className="image-list">{images}</div>
}

export default ImageList