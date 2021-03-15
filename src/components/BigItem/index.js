import React from 'react'
import './BigItem.scss'
import {Link} from 'react-router-dom'
import {date} from '../../helpers/index'

const BigItem = ({item}) => {
  return (
    <div className="item">
      <Link to={`/spacelaunch/launch/${item.id}`}>
        <img src={item.image_url || '/spacelaunch/empty.png'} alt="" className="img"/>
      </Link>
      <div className="date">
        {date(item.net)}
      </div>
      <div className="title">
        <Link to={`/spacelaunch/launch/${item.id}`}>{item.name}</Link>
      </div>
    </div>
  )
}

export default BigItem