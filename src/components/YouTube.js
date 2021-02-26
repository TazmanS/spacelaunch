import React, { Fragment } from 'react'
import './YouTube.css'

const YouTube = ({ url }) => {
  const id = url?.split('=')?.slice(-1)?.join()
  const youtube = url?.includes('youtube')
  return (
    <Fragment>
      {youtube
        ? 
        <iframe 
        title="youtube"
        className="YouTube"
        src={`https://www.youtube.com/embed/${id}`} 
        frameBorder="0" 
        allow="autoplay; encrypted-media" 
        allowFullScreen>
      </iframe> 
        :
        null
      }   
    </Fragment>
  )
}

export default YouTube