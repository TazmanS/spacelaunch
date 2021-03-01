import React, { Fragment, useEffect, useState } from 'react'
import './YouTube.css'

const YouTube = ({ url }) => {
  let youtube = url?.includes('youtube')
  const [id, setId] = useState(null)

  useEffect(() => {
    setId( url?.split('=')?.slice(-1)?.join() )
  }, [url])
  return (
    <Fragment>
      {youtube
        ? 
        <div className="Youtube__container">
          <iframe 
            title="youtube"
            className="Youtube__response"
            src={`https://www.youtube.com/embed/${id}`} 
            frameBorder="0" 
            allow="autoplay; encrypted-media" 
            allowFullScreen>
          </iframe> 
        </div>
        :
        null
      } 
    </Fragment>  
  )
}

export default YouTube