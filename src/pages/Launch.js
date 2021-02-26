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
import {id} from '../helpers/index'
import Timer from '../components/Timer'

const Launch = ({location}) => {
  const dispatch = useDispatch()
  const {launch} = useSelector(state => state.launch)
  
  useEffect(() => {
    dispatch(getOneLaunch(id(location)))
  }, [dispatch, location])

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
        <div className="SectionOne__title">{launch.name}</div>
        <div className="SectionOne__text">Go for Launch</div>
        { launch.net ? <Timer time={launch.net} /> : null }
      </SectionOne>

      <SectionTwo>
        <YouTube 
          url={launch?.vidURLs?.[0]} 
        />
        <div className="SectionTwo__title">Overview</div>
        <div className="SectionTwo__info">Destination: {launch?.mission?.orbit || 'Does not have'}</div>
        <div className="SectionTwo__info">Mission: {launch?.mission?.type || 'Does not have'}</div>
        <div className="SectionTwo__description Description">
          <div className="Description__item">{launch?.mission?.type}</div>
          <div className="Description__item">{launch?.mission?.orbit}</div>
          <div className="Description__item">{launch?.mission?.orbit_abbrev}</div>
          <div className="Description__item">{launch?.pad?.location?.name}</div>
        </div>
        <div className="SectionTwo__text">{launch?.mission?.description || 'Does not have'}</div>

        <div className="SectionTwo__title">{launch?.rocket?.configuration?.name || 'Does not have'}</div>
        <div className="SectionTwo__info">Family: {launch?.rocket?.configuration?.family || 'Does not have'}</div>
        <div className="SectionTwo__info">Configuration: {launch?.rocket?.configuration?.variant || 'Does not have'}</div>
        <div className="SectionTwo__text">{launch?.rocket?.configuration?.description || 'Does not have'}</div>

        <div className="SectionTwo__button">See Rocket Details</div>

        <div className="SectionTwo__map">
          {launch.pad ? <GoogleMap coords={launch.pad}/> : null}
          
        </div>
      </SectionTwo>

      <Footer />
    </div>
  )
}

export default Launch