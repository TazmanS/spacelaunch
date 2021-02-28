import React, { useEffect, useState } from 'react'
import './YouTube.css'

const YouTube = ({ url }) => {
  let youtube = url?.includes('youtube')
  const [id, setId] = useState(null)

  useEffect(() => {
    setId( url?.split('=')?.slice(-1)?.join() )
  }, [url])
  return (
    <div className="Youtube__container">
      {youtube
        ? 
        <iframe 
          title="youtube"
          className="Youtube__response"
          src={`https://www.youtube.com/embed/${id}`} 
          frameBorder="0" 
          allow="autoplay; encrypted-media" 
          allowFullScreen>
        </iframe> 
        :
        null
      }   
    </div>
  )
}

export default YouTube