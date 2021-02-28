import React, {useEffect} from 'react'
import Slider from '../components/Slider'
import './Home.css'
import {useDispatch, useSelector} from 'react-redux'
import {getFirsTenLaunches} from '../store/actions/launches'
import {getEvents} from '../store/actions/events'
import Header from '../sections/Header'
import Footer from '../sections/Footer'
import SectionOne from '../sections/SectionOne'
import SectionTwo from '../sections/SectionTwo'
import Gallery from '../components/Gallery'
import BigButton from '../components/BigButton'


const Home = () => {
  const dispatch = useDispatch()
  const {events} = useSelector(state => state.events)

  useEffect(() => {
    dispatch(getFirsTenLaunches())
    dispatch(getEvents())
  }, [dispatch])

  return (
    <div className="Home"
      style={{'backgroundImage': 'url(/spacelaunch/homeMain.svg)'}}
    >
      
      <Header>
        <img src="/spacelaunch/bigLogo.svg" alt="" className="logo"/> 
      </Header>

      <SectionOne>
        <div className="SectionOne__title Title--big">
          Upcoming Spaceflight Launches
        </div>
        <div className="SectionOne__text">
          View all launches available - including launches from the past and utilize powerful search filters.
        </div>
        <BigButton>
          Show All Launches  
        </BigButton> 
      </SectionOne>

      <SectionTwo>
        <div className="SectionTwo__slider Slider">
          <Slider items={events} title="Recent Events" />
        </div>
        <div className="SectionTwo__gallery Gallery">
          <div className="Gallery__title">
            Spaceflight Launches
          </div>
          <div className="Gallery__content">
            <Gallery />
          </div>
        </div>
      </SectionTwo>

      <Footer />
    </div>
  )
}

export default Home