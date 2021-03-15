import React from 'react'
import './SectionTwo.scss'

const SectionTwo = ({children}) => {
  return(
    <section className="sectionTwo">
      <div className="container">
        {children}
      </div>
    </section>
  )
}

export default SectionTwo