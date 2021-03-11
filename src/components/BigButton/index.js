import React from 'react'
import './BigButton.css'

const BigButton = ({children, click}) => {
  return (
    <button className="bigButton" onClick={click}>
      {children}
    </button>
  )
}

export default BigButton