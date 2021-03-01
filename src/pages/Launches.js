import React from 'react'
import './Launches.css'
import Header from '../sections/Header'
import SectionOne from '../sections/SectionOne'
import SectionTwo from '../sections/SectionTwo'
import Footer from '../sections/Footer'
import Gallery from '../components/Gallery'
import {useSelector} from 'react-redux'

const Launches = () => {
  const {events} = useSelector(state => state.events)
  return (
    <div className="Launches">
      <Header />
      <SectionOne>
        <div className="Title--big">
          All launches
        </div>
      </SectionOne>

      <SectionTwo>
        <div className="Gallery__content">
          <Gallery events={events}/>
        </div>
      </SectionTwo>

      <Footer />
    </div>
  )
}

export default Launches