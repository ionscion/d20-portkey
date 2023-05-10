import React from 'react'
import ionscion from '../images/ionscion.png'

function About() {
  return (
    <div className='flex'>
        <h3>About Me</h3>
        <img src={ionscion} alt="ionscion" className="w-32 h-32 object-contain ml-4"/>
    </div>
  )
}

export default About