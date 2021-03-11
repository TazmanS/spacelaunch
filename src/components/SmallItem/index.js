import React from 'react'
import './SmallItem.css'
import {date} from '../../helpers/index'
import {Link} from 'react-router-dom'

const SmallItem = ({item}) => {

  return (
    <div className="smallItem">
      <Link to={`/spacelaunch/event/${item.id}`}>
        <img src={item.feature_image || "/empty.png"} alt="" className="smallItem__img"/>
      </Link>
      <div className="smallItem__date date">
        {date(item.date)}
      </div>
      <div className="smallItem__title">
        <Link to={`/spacelaunch/event/${item.id}`}>
          {item.name}
        </Link>
      </div>
    </div>
  )
}

export default SmallItem