import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

const Header = ({children}) => {
  return (
    <header className="Header">
      <div className="Header__container">
        {children 
        ? 
        children 
        : 
          <Fragment>
            <div className="Header__text">
              <Link to='/spacelaunch'>
                <img src="/spacelaunch/arrow.svg" alt="arrow" />
                Back To Home
              </Link>
            </div>
            <img src="/spacelaunch/bigLogo.svg" alt="logo" className="logo__right" />
          </Fragment>
        }  
      </div>
    </header>
  )
}

export default Header