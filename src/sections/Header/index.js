import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
import './Header.scss'

const Header = ({children}) => {
  return (
    <header>
      <div className="header__container">
        {children 
        ? 
        children 
        : 
          <Fragment>
            <div className="header__text">
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