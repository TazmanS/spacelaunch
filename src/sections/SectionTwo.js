import React from 'react'
import './SectionTwo.css'

const SectionTwo = ({children}) => {
  return(
    <section className="SectionTwo">
      <div className="SectionTwo__container">
        {children}
      </div>
    </section>
  )
}

export default SectionTwo