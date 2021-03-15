import React, { Fragment, useEffect, useState } from 'react'
import './YouTube.scss'

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
        <div className="youtube__container">
          <iframe 
            title="youtube"
            className="youtube__response"
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