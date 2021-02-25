import React from 'react'
import './YouTube.css'

const YouTube = ({ url }) => {
  return (
    <iframe 
      title="youtube"
      className="YouTube"
      src={url} 
      frameBorder="0" 
      allow="autoplay; encrypted-media" 
      allowFullScreen>
    </iframe>
  )
}

export default YouTube