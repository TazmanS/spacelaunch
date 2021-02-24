import React from 'react'
import './SmallItem.css'

const SmallItem = () => {
  return (
    <div className="SmallItem">
      <img src="/empty.png" alt="" className="SmallItem__img"/>
      <div className="SmallItem__date">
        Dec. 6, 2020, 6:17 p.m.
      </div>
      <div className="SmallItem__title">
        Falcon 9 Block 5 | Dragon CRS-2 SpX-21
      </div>
    </div>
  )
}

export default SmallItem