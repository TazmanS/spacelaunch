import React, { useEffect } from 'react'
import './Launch.css'
import {Link} from 'react-router-dom'
import GoogleMap from '../../components/GoogleMap/'
import {useDispatch, useSelector} from 'react-redux'
import {getOneLaunch} from '../../store/actions/launch'
import Footer from '../../sections/Footer/'
import Header from '../../sections/Header/'
import SectionOne from '../../sections/SectionOne/'
import SectionTwo from '../../sections/SectionTwo/'
import YouTube from '../../components/YouTube/'
import BigButton from '../../components/BigButton/'
import {id} from '../../helpers/index'
import Timer from '../../components/Timer/'

const Launch = ({location}) => {
  const dispatch = useDispatch()
  const {launch} = useSelector(state => state.launch)
  
  useEffect(() => {
    dispatch(getOneLaunch(id(location)))
  }, [dispatch, location])

  return (
    <div className="launch"
      style={{'backgroundImage': 
      `url('/spacelaunch/launchOverlay.svg'), url('/spacelaunch/launchMain.png')`
    }}>

      <Header />

      <SectionOne>
        <div className="sectionOne__title title--big">{launch.name}</div>
        <div className="sectionOne__text">Go for Launch</div>
        { launch.net ? <Timer time={launch.net} /> : null }
      </SectionOne>

      <SectionTwo>
        <YouTube 
          url={launch.vidURLs[0]} 
        />
        <div className="sectionTwo__title">Overview</div>
        <div className="sectionTwo__info">Destination: {launch.mission.orbit || 'Does not have'}</div>
        <div className="sectionTwo__info">Mission: {launch.mission.type || 'Does not have'}</div>
        <div className="sectionTwo__description description">
          <div className="description__item">{launch.mission.type || 'LAUNCH COMPLEX 39A'}</div>
          <div className="description__item">{launch.mission.orbit || 'LOW EARTH ORBIT'}</div>
          <div className="description__item">{launch.mission.orbit_abbrev || 'PROBABILITY: 60%'}</div>
          <div className="description__item">{launch.pad?.location?.name || 'KENNEDY SPACE CENTER, FL, USA'}</div>
        </div>
        <div className="sectionTwo__text">{launch.mission.description || 'Does not have'}</div>

        <div className="sectionTwo__title">
          <Link to={`/rocket/${launch.rocket.configuration.id}`}>
            {launch?.rocket.configuration.name || 'Does not have'}
          </Link>
        </div>
        <div className="sectionTwo__info">Family: {launch.rocket.configuration.family || 'Does not have'}</div>
        <div className="sectionTwo__info">Configuration: {launch.rocket.configuration.variant || 'Does not have'}</div>
        <div className="sectionTwo__text">{launch.rocket.configuration.description || 'Does not have'}</div>

        <BigButton>
          <Link to={`/spacelaunch/rocket/${launch.rocket.configuration.id}`}>
            See Rocket Details
          </Link>
        </BigButton>

        <div className="sectionTwo__map">
          {launch?.pad ? <GoogleMap coords={launch?.pad}/> : null}
        </div>
      </SectionTwo>

      <Footer />
    </div>
  )
}

export default Launch