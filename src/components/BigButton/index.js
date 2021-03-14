import React from 'react'
import './BigButton.css'

const BigButton = ({children, click}) => {
  return (
    <div className="bigButton" onClick={click}>
      {children}
    </div>
  )
}

export default BigButton