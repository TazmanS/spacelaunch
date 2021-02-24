import React from 'react'
import './BigItem.css'

const BigItem = () => {
  return (
    <div className="Item">
      <img src="/empty.png" alt="" className="Item__img"/>
      <div className="Item__date">
        Dec. 6, 2020, 6:17 p.m.
      </div>
      <div className="Item__title">
        Long March 3B/E | Gaofen 14
      </div>
    </div>
  )
}

export default BigItem