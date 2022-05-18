import React from 'react'
import videoBg from '../../assets/img/background.mp4'
import './hero.css'

const Hero = () => {
  return (
   
    <div className='main'>
      <div className='overlay'></div>
       <video loop autoPlay muted>
        <source
          src={videoBg}
          type="video/mp4"
        />
      </video>
        <div className='content'>
          <h1>Grow your Business</h1>
          <h1>Build Your Website</h1>
        </div>
    </div>
  )
}

export default Hero