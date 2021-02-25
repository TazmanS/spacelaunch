import React from 'react'
import './Header.css'

const Header = ({children}) => {
  return (
    <header className="Header">
      <div className="Header__container">
        {children}  
      </div>
    </header>
  )
}

export default Header