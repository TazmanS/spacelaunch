import React from 'react'
import './Loader.css'

const Loader = () => {
  return (
    <div className="loader">
      <img src="/spacelaunch/loading.svg" alt="" className="loader__img"/>
      <div className="loader__title">Load More</div>
    </div>
  )
}

export default Loader