import React from 'react'
import './SmallItem.css'
import {date} from '../helpers/index'
import {Link} from 'react-router-dom'

const SmallItem = ({item}) => {
  return (
    <div className="SmallItem">
      <Link to={`/event/${item.id}`}>
        <img src={item.feature_image || "/empty.png"} alt="" className="SmallItem__img"/>
      </Link>
      <div className="SmallItem__date">
        {date(item.date)}
      </div>
      <div className="SmallItem__title">
        <Link to={`/event/${item.id}`}>
          {item.name}
        </Link>
      </div>
    </div>
  )
}

export default SmallItem