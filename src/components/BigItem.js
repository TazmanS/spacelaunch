import React from 'react'
import './BigItem.css'
import {Link} from 'react-router-dom'

const BigItem = ({item}) => {
  const date = new Date(item.net)
  var options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  return (
    <div className="Item">
      <Link to={`/launch/${item.id}`}>
        <img src={item.image_url || 'empty.png'} alt="" className="Item__img"/>
      </Link>
      <div className="Item__date">
        {date.toLocaleString("en-US", options)}
      </div>
      <div className="Item__title">
        <Link to={`/launch/${item.id}`}>{item.name}</Link>
      </div>
    </div>
  )
}

export default BigItem