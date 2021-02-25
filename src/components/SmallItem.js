import React from 'react'
import './SmallItem.css'

const SmallItem = ({item}) => {
  const date = new Date(item.date)
  var options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };
  return (
    <div className="SmallItem">
      <img src={item.feature_image || "/empty.png"} alt="" className="SmallItem__img"/>
      <div className="SmallItem__date">
        {date.toLocaleString("en-US", options)}
      </div>
      <div className="SmallItem__title">
        {item.name}
      </div>
    </div>
  )
}

export default SmallItem