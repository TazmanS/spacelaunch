import React from 'react'
import './BigButton.css'

const BigButton = ({children}) => {
  return (
    <button className="BigButton">
      {children}
    </button>
  )
}

export default BigButton