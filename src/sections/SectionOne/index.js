import React from 'react'
import './SectionOne.css'

const SectionOne = ({children}) => {
  return (
    <section className="sectionOne">
      {children}
    </section>
  )
}

export default SectionOne