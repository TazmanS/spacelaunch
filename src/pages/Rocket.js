import React, { useEffect } from 'react'
import './Rocket.css'
import Header from '../sections/Header'
import SectionOne from '../sections/SectionOne'
import SectionTwo from '../sections/SectionTwo'
import Footer from '../sections/Footer'
import {id} from '../helpers/index'
import {useDispatch, useSelector} from 'react-redux'
import {getRocket} from '../store/actions/rocket'


const Rocket = ({location}) => {
  const dispatch = useDispatch()
  const { rocket } = useSelector(state => state.rocket)

  useEffect(() => {
    dispatch(getRocket(id(location)))
  }, [dispatch, location])

  return (
    <div className="Rocket" 
      style={{'backgroundImage': 
        `url('/spacelaunch/rocketOverlay.png'), url(${rocket.image_url})`
      }}>
      
      <Header />

      <SectionOne>
        <div className="Rocket__name Title--big">{rocket.name}</div>
        <div className="Rocket__orbit">{rocket.family}</div>
        <div className="Rocket__date">{rocket.maiden_flight}</div>
        <div className="Rocket__description">{rocket.description}</div>
      </SectionOne>

      <SectionTwo>
        <div className="Rocket__char">
          <div className="Char__item">{rocket.maiden_flight || 'ACTIVE'}</div>
          <div className="Char__item">{rocket.name || 'RE-USABLE'}</div>
          <div className="Char__item">{rocket.family || 'FALCON'}</div>
        </div>
        <div className="Rocket__table">
          <div className="Rocket__family">
            <img src="/spacelaunch/family.png" alt="" />
            <div className="Family__main">Family</div>
            <div className="Family__title">Name</div>
            <div className="Family__var">{rocket.name || '-'}</div>
            <div className="Family__title">Family</div>
            <div className="Family__var">{rocket.family || '-'}</div>
            <div className="Family__title">Variant</div>
            <div className="Family__var">{rocket.variant || '-'}</div>
            <div className="Family__title">Full Name</div>
            <div className="Family__var">{rocket.full_name || '-'}</div>
            <div className="Family__title">Alias</div>
            <div className="Family__var">{rocket.alias || '-'}</div>
          </div>
          <div className="Rocket__spec">
            <img src="/spacelaunch/spec.png" alt="" />
            <div className="Spec__main">Specifications</div>
            <div className="Spec__title">Minimum Stage</div>
            <div className="Spec__var">{rocket.min_stage || '-'}</div>
            <div className="Spec__title">Max Stage</div>
            <div className="Spec__var">{rocket.max_stage || '-'}</div>
            <div className="Spec__title">Length</div>
            <div className="Spec__var">{rocket.length || '-'}</div>
            <div className="Spec__title">Diameter</div>
            <div className="Spec__var">{rocket.diameter || '-'}</div>
            <div className="Spec__title">Launch Mass</div>
            <div className="Spec__var">{rocket.launch_mass || '-'}</div>
            <div className="Spec__title">Trust</div>
            <div className="Spec__var">{rocket.to_thrust || '-'}</div>
            <div className="Spec__title">Apogee</div>
            <div className="Spec__var">{rocket.apogee || '-'}</div>
          </div>
          <div className="Rocket__payload">
            <img src="/spacelaunch/capacity.png" alt="" />
            <div className="Payload__main">Other</div>
            <div className="Payload__title">Capacity</div>
            <div className="Payload__var">{rocket.gto_capacity || '-'}</div>
            <div className="Payload__title">Maiden Flight</div>
            <div className="Payload__var">{rocket.maiden_flight || '-'}</div>
          </div>
        </div>
      </SectionTwo>

      <Footer/>

    </div>
  )
}

export default Rocket