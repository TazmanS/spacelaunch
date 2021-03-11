import React, {useEffect} from 'react'
import Slider from '../../components/Slider/'
import './Home.css'
import {useDispatch, useSelector} from 'react-redux'
import {getFirsTenLaunches} from '../../store/actions/launches'
import {getEvents} from '../../store/actions/events'
import Header from '../../sections/Header/'
import Footer from '../../sections/Footer/'
import SectionOne from '../../sections/SectionOne/'
import SectionTwo from '../../sections/SectionTwo/'
import Gallery from '../../components/Gallery/'
import BigButton from '../../components/BigButton/'
import {Link} from 'react-router-dom'


const Home = () => {
  const dispatch = useDispatch()
  const {events} = useSelector(state => state.events)

  useEffect(() => {
    dispatch(getFirsTenLaunches())
    dispatch(getEvents())
  }, [dispatch])

  return (
    <div className="home"
      style={{'backgroundImage': 'url(/spacelaunch/homeMain.svg)'}}
    >
      
      <Header>
        <img src="/spacelaunch/bigLogo.svg" alt="" className="logo"/> 
      </Header>

      <SectionOne>
        <div className="sectionOne__title title--big">
          Upcoming Spaceflight Launches
        </div>
        <div className="sectionOne__text">
          View all launches available - including launches from the past and utilize powerful search filters.
        </div>
        <Link to="/spacelaunch/launches">
          <BigButton>
            Show All Launches 
          </BigButton> 
        </Link>
      </SectionOne>

      <SectionTwo>
        <div className="sectionTwo__slider slider">
          <Slider items={events} title="Recent events" />
        </div>
        <div className="sectionTwo__gallery gallery">
          <div className="gallery__title">
            Spaceflight Launches
          </div>
          <div className="gallery__content">
            <Gallery />
          </div>
        </div>
      </SectionTwo>

      <Footer />
    </div>
  )
}

export default Home