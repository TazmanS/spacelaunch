import React, { useEffect } from 'react'
import './Rocket.css'
import Header from '../../sections/Header/'
import SectionOne from '../../sections/SectionOne/'
import SectionTwo from '../../sections/SectionTwo/'
import Footer from '../../sections/Footer/'
import {id} from '../../helpers/index'
import {useDispatch, useSelector} from 'react-redux'
import {getRocket} from '../../store/actions/rocket'


const Rocket = ({location}) => {
  const dispatch = useDispatch()
  const { rocket } = useSelector(state => state.rocket)

  useEffect(() => {
    dispatch(getRocket(id(location)))
  }, [dispatch, location])

  return (
    <div className="rocket" 
      style={{'backgroundImage': 
        `url('/spacelaunch/rocketOverlay.png'), url(${rocket.image_url})`
      }}>
      
      <Header />

      <SectionOne>
        <div className="rocket__name title--big">{rocket.name}</div>
        <div className="rocket__orbit">{rocket.family}</div>
        <div className="rocket__date">{rocket.maiden_flight}</div>
        <div className="rocket__description">{rocket.description}</div>
      </SectionOne>

      <SectionTwo>
        <div className="rocket__char">
          <div className="char__item">{rocket.maiden_flight || 'ACTIVE'}</div>
          <div className="char__item">{rocket.name || 'RE-USABLE'}</div>
          <div className="char__item">{rocket.family || 'FALCON'}</div>
        </div>
        <div className="rocket__table">
          <div className="rocket__family">
            <img src="/spacelaunch/family.png" alt="" />
            <div className="family__main">Family</div>
            <div className="family__title">Name</div>
            <div className="family__var">{rocket.name || '-'}</div>
            <div className="family__title">Family</div>
            <div className="family__var">{rocket.family || '-'}</div>
            <div className="family__title">Variant</div>
            <div className="family__var">{rocket.variant || '-'}</div>
            <div className="family__title">Full Name</div>
            <div className="family__var">{rocket.full_name || '-'}</div>
            <div className="family__title">Alias</div>
            <div className="family__var">{rocket.alias || '-'}</div>
          </div>
          <div className="Rocket__spec">
            <img src="/spacelaunch/spec.png" alt="" />
            <div className="spec__main">Specifications</div>
            <div className="spec__title">Minimum Stage</div>
            <div className="spec__var">{rocket.min_stage || '-'}</div>
            <div className="spec__title">Max Stage</div>
            <div className="spec__var">{rocket.max_stage || '-'}</div>
            <div className="spec__title">Length</div>
            <div className="spec__var">{rocket.length || '-'}</div>
            <div className="spec__title">Diameter</div>
            <div className="spec__var">{rocket.diameter || '-'}</div>
            <div className="spec__title">Launch Mass</div>
            <div className="spec__var">{rocket.launch_mass || '-'}</div>
            <div className="spec__title">Trust</div>
            <div className="spec__var">{rocket.to_thrust || '-'}</div>
            <div className="spec__title">Apogee</div>
            <div className="spec__var">{rocket.apogee || '-'}</div>
          </div>
          <div className="rocket__payload">
            <img src="/spacelaunch/capacity.png" alt="" />
            <div className="payload__main">Other</div>
            <div className="payload__title">Capacity</div>
            <div className="payload__var">{rocket.gto_capacity || '-'}</div>
            <div className="payload__title">Maiden Flight</div>
            <div className="payload__var">{rocket.maiden_flight || '-'}</div>
          </div>
        </div>
      </SectionTwo>

      <Footer/>

    </div>
  )
}

export default Rocket