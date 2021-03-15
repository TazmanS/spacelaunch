import React from 'react'
import './SectionOne.scss'

const SectionOne = ({children}) => {
  return (
    <section className="sectionOne">
      {children}
    </section>
  )
}

export default SectionOne