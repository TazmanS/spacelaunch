import React from 'react'
import './SmallItem.css'
import {date} from '../helpers/index'
import {Link} from 'react-router-dom'

const SmallItem = ({item}) => {
  return (
    <div className="SmallItem">
      <Link to={`/spacelaunch/event/${item.id}`}>
        <img src={item.feature_image || "/empty.png"} alt="" className="SmallItem__img"/>
      </Link>
      <div className="SmallItem__date Date">
        {date(item.date)}
      </div>
      <div className="SmallItem__title">
        <Link to={`/spacelaunch/event/${item.id}`}>
          {item.name}
        </Link>
      </div>
    </div>
  )
}

export default SmallItem