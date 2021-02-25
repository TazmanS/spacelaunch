import React, { useEffect } from 'react'
import './Launch.css'
import {Link} from 'react-router-dom'
import GoogleMap from '../components/GoogleMap'
import {useDispatch, useSelector} from 'react-redux'
import {getOneLaunch} from '../store/actions/launch'
import Footer from '../sections/Footer'
import Header from '../sections/Header'
import SectionOne from '../sections/SectionOne'
import SectionTwo from '../sections/SectionTwo'
import YouTube from '../components/YouTube'

const Launch = ({location}) => {
  const dispatch = useDispatch()

  useEffect(() => {
    let id = location.pathname.split('/').slice(-1).join()
    dispatch(getOneLaunch(id))
    
  })

  const {launch} = useSelector(state => state.launch)

  console.log(launch)

  return (
    <div className="Launch">

      <Header>
        <div className="Header__text">
          <Link to='/'>
            <img src="/arrow.svg" alt="arrow" />
            Back To Home
          </Link>
        </div>
        <img src="/bigLogo.svg"  alt="logo" className="logo__right" />
      </Header>

      <SectionOne>
        <div className="SectionOne__title">Falcon 9 Block 5 | Dragon CRS-2 SpX-21</div>
        <div className="SectionOne__text">Go for Launch</div>
        <div className="SectionOne__time">00 : 00 : 27 : 41</div>
      </SectionOne>

      <SectionTwo>
        <YouTube 
          url="https://www.youtube.com/embed/videoseries?list=PLx0sYbCqOb8TBPRdmBHs5Iftvv9TPboYG" 
        />
        <div className="SectionTwo__title">Overview</div>
        <div className="SectionTwo__info">Destination: Low Earth Orbit</div>
        <div className="SectionTwo__info">Mission: Resupply</div>
        <div className="SectionTwo__description Description">
          <div className="Description__item">LAUNCH COMPLEX 39A</div>
          <div className="Description__item">LOW EARTH ORBIT</div>
          <div className="Description__item">PROBABILITY: 60%</div>
          <div className="Description__item">KENNEDY SPACE CENTER, FL, USA</div>
        </div>
        <div className="SectionTwo__text">SpaceX will launch the first cargo variant of its Dragon 2 spacecraft on their 21st commercial resupply services mission to the International Space Station. The flight will be conducted under the second Commercial Resupply Services contract with NASA. Dragon will be filled with supplies and payloads, including critical materials to directly support more than 250 science and research investigations that occur onboard the orbiting laboratory.</div>

        <div className="SectionTwo__title">Falcon 9 Block 5</div>
        <div className="SectionTwo__info">Family: Falcon</div>
        <div className="SectionTwo__info">Configuration: Block 5</div>
        <div className="SectionTwo__text">Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit. The Block 5 variant is the fifth major interval aimed at improving upon the ability for rapid reusability.</div>

        <div className="SectionTwo__button">See Rocket Details</div>

        <div className="SectionTwo__map">
          <GoogleMap />
        </div>
      </SectionTwo>

      <Footer />
    </div>
  )
}

export default Launch