import React from 'react'
import './Loader.scss'

const Loader = () => {
  return (
    <div className="loader">
      <img src="/spacelaunch/loading.svg" alt="" className="img"/>
      <div className="title">Load More</div>
    </div>
  )
}

export default Loader