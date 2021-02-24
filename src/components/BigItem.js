import React from 'react'
import './BigItem.css'

const BigItem = ({launch}) => {
  const date = new Date(launch.net)
  var options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  return (
    <div className="Item">
      <img src={launch.image_url || 'empty.png'} alt="" className="Item__img"/>
      <div className="Item__date">
        {date.toLocaleString("en-US", options)}
      </div>
      <div className="Item__title">
        {launch.name}
      </div>
    </div>
  )
}

export default BigItem