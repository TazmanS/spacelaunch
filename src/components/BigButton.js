import React from 'react'
import './BigButton.css'

const BigButton = ({children, click}) => {
  return (
    <button className="BigButton" onClick={click}>
      {children}
    </button>
  )
}

export default BigButton