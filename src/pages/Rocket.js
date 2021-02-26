import React from 'react'
import './Rocket.css'
import Header from '../sections/Header'
import SectionOne from '../sections/SectionOne'
import SectionTwo from '../sections/SectionTwo'
import Footer from '../sections/Footer'
import {Link} from 'react-router-dom'

const Rocket = () => {
  return (
    <div className="Rocket">
      
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
        <div className="Rocket__name">Falcon 9 Block 5</div>
        <div className="Rocket__orbit">SpaceX (SpX)</div>
        <div className="Rocket__date">May 11, 2018</div>
        <div className="Rocket__description">Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit. The Block 5 variant is the fifth major interval aimed at improving upon the ability for rapid reusability.</div>
      </SectionOne>

      <SectionTwo>
        <div className="Rocket__char">
          <div className="Char__item">ACTIVE</div>
          <div className="Char__item">RE-USABLE</div>
          <div className="Char__item">FALCON</div>
        </div>
        <div className="Rocket__table">
          <div className="Rocket__family">
            <img src="/family.png" alt="" />
            <div className="Family__main">Family</div>
            <div className="Family__title">Name</div>
            <div className="Family__var">Falcon 9 Block 5</div>
            <div className="Family__title">Name</div>
            <div className="Family__var">Falcon 9 Block 5</div>
            <div className="Family__title">Name</div>
            <div className="Family__var">Falcon 9 Block 5</div>
            <div className="Family__title">Name</div>
            <div className="Family__var">Falcon 9 Block 5</div>
          </div>
          <div className="Rocket__spec">
            <img src="/spec.png" alt="" />
            <div className="Spec__main">Specifications</div>
            <div className="Spec__title">Minimum Stage</div>
            <div className="Spec__var">1</div>
            <div className="Spec__title">Minimum Stage</div>
            <div className="Spec__var">1</div>
            <div className="Spec__title">Minimum Stage</div>
            <div className="Spec__var">1</div>
            <div className="Spec__title">Minimum Stage</div>
            <div className="Spec__var">1</div>
            <div className="Spec__title">Minimum Stage</div>
            <div className="Spec__var">1</div>
          </div>
          <div className="Rocket__payload">
            <img src="/capacity.png" alt="" />
            <div className="Payload__main">Payload Capacity</div>
            <div className="Payload__title">Launch Cost</div>
            <div className="Payload__var">$52,000,000</div>
            <div className="Payload__title">Launch Cost</div>
            <div className="Payload__var">$52,000,000</div>
          </div>
        </div>
      </SectionTwo>

      <Footer/>

    </div>
  )
}

export default Rocket