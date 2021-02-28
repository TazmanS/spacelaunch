import React from 'react'
import './BigItem.css'
import {Link} from 'react-router-dom'
import {date} from '../helpers/index'

const BigItem = ({item}) => {
  return (
    <div className="Item">
      <Link to={`/spacelaunch/launch/${item.id}`}>
        <img src={item.image_url || '/spacelaunch/empty.png'} alt="" className="Item__img"/>
      </Link>
      <div className="Item__date">
        {date(item.net)}
      </div>
      <div className="Item__title">
        <Link to={`/spacelaunch/launch/${item.id}`}>{item.name}</Link>
      </div>
    </div>
  )
}

export default BigItem