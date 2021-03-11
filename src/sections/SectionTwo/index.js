import React from 'react'
import './SectionTwo.css'

const SectionTwo = ({children}) => {
  return(
    <section className="sectionTwo">
      <div className="sectionTwo__container">
        {children}
      </div>
    </section>
  )
}

export default SectionTwo