import React, { useEffect } from 'react'
import './Event.css'
import Footer from '../sections/Footer'
import Header from '../sections/Header'
import SectionOne from '../sections/SectionOne'
import SectionTwo from '../sections/SectionTwo'
import BigButton from '../components/BigButton'
import YouTube from '../components/YouTube'
import Slider from '../components/Slider'
import {useDispatch, useSelector} from 'react-redux'
import {getEvents} from '../store/actions/events'
import {getEvent} from '../store/actions/event'
import {id, date} from '../helpers/index'

const Event = ({location}) => {
  const dispatch = useDispatch()
  const {events} = useSelector(state => state.events)
  const {event} = useSelector(state => state.event)
  
  useEffect(() => {
    dispatch(getEvents())
    dispatch(getEvent(id(location)))
  }, [dispatch,location])
  
  return (
    <div className="Event" style={{'backgroundImage': 
      `url('/spacelaunch/rocketOverlay.png'), url(${event.feature_image})`
    }}>

      <Header />

      <SectionOne>
        <div className="Event__title Title--big">{event.name}</div>
        <div className="Event__date Date">{date(event.date)}</div>
        <div className="Event__text">{event.description}</div>
        <a href={event.url}>
          <BigButton>
            Read on site
          </BigButton>
        </a>
      </SectionOne>

      <SectionTwo>
        <YouTube url={event.video_url}/>
        <div className="SectionTwo__title">Related Information</div>
        <div className="Event__info Info">
          <img src={event.feature_image || ''} alt="" />
          <div className="Info__container">
            <div className="Info__title">{event.name}</div>
            <div className="Event__date Date">{date(event.date)}</div>
            <div className="Info__des">Destination: <span>{event.location}</span> </div>
            <div className="Info__mission">Mission: <span>{event.type.name}</span></div>
            <div className="Info__text">{event.description}</div>
          </div>
        </div>
        <div className="Event__slider">
          <Slider items={events} title="Recent Events" />
        </div>
      </SectionTwo>

      <Footer />
    </div>
  )
}

export default Event