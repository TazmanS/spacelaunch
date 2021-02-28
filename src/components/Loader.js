import React from 'react'
import './Loader.css'

const Loader = () => {
  return (
    <div className="Loader">
      <img src="/spacelaunch/loading.svg" alt="" className="Loader__img"/>
      <div className="Loader__title">Load More</div>
    </div>
  )
}

export default Loader