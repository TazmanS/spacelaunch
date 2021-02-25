import React from 'react'
import './SmallItem.css'
import {date} from '../helpers/index'

const SmallItem = ({item}) => {
  return (
    <div className="SmallItem">
      <img src={item.feature_image || "/empty.png"} alt="" className="SmallItem__img"/>
      <div className="SmallItem__date">
        {date(item.date)}
      </div>
      <div className="SmallItem__title">
        {item.name}
      </div>
    </div>
  )
}

export default SmallItem