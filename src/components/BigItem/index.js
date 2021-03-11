import React from 'react'
import './BigItem.css'
import {Link} from 'react-router-dom'
import {date} from '../../helpers/index'

const BigItem = ({item}) => {
  return (
    <div className="item">
      <Link to={`/spacelaunch/launch/${item.id}`}>
        <img src={item.image_url || '/spacelaunch/empty.png'} alt="" className="item__img"/>
      </Link>
      <div className="item__date">
        {date(item.net)}
      </div>
      <div className="item__title">
        <Link to={`/spacelaunch/launch/${item.id}`}>{item.name}</Link>
      </div>
    </div>
  )
}

export default BigItem