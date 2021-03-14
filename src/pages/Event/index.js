import React, { useEffect } from 'react'
import './Event.css'
import {useParams} from "react-router-dom"
import Footer from '../../sections/Footer/'
import Header from '../../sections/Header/'
import SectionOne from '../../sections/SectionOne/'
import SectionTwo from '../../sections/SectionTwo/'
import BigButton from '../../components/BigButton/'
import YouTube from '../../components/YouTube/'
import Slider from '../../components/Slider/'
import {useDispatch, useSelector} from 'react-redux'
import {getEvents} from '../../store/actions/events'
import {getEvent} from '../../store/actions/event'
import {date} from '../../helpers/index'

const Event = () => {
  const dispatch = useDispatch()
  const {events} = useSelector(state => state.events)
  const {event} = useSelector(state => state.event)
  const { id } = useParams()
  
  useEffect(() => {
    dispatch(getEvents())
    dispatch(getEvent(id))
  }, [dispatch,id])
  
  return (
    <div className="event" style={{'backgroundImage': 
      `url('/spacelaunch/rocketOverlay.png'), url(${event.feature_image})`
    }}>

      <Header />

      <SectionOne>
        <div className="event__title title--big">{event.name}</div>
        <div className="event__date date">{date(event.date)}</div>
        <div className="event__text">{event.description}</div>
        <a href={event.url}>
          <BigButton>
            Read on site
          </BigButton>
        </a>
      </SectionOne>

      <SectionTwo>
        <YouTube url={event.video_url}/>
        <div className="sectionTwo__title">Related Information</div>
        <div className="event__info info">
          <img src={event.feature_image || ''} alt="" />
          <div className="info__container">
            <div className="info__title">{event.name}</div>
            <div className="event__date date">{date(event.date)}</div>
            <div className="info__des">Destination: <span>{event.location}</span> </div>
            <div className="info__mission">Mission: <span>{event.type.name}</span></div>
            <div className="info__text">{event.description}</div>
          </div>
        </div>
        <div className="event__slider">
          <Slider items={events} title="Recent events" />
        </div>
      </SectionTwo>

      <Footer />
    </div>
  )
}

export default Event