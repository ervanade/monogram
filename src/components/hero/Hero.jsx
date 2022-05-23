import React from 'react'
import videoBg from '../../assets/img/background.mp4'
import './hero.css'
import { Link } from 'react-scroll'
import { BiChevronDown } from 'react-icons/bi'
import TypeAnimation from 'react-type-animation'

// Import Swiper styles
import 'swiper/css';


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
            <TypeAnimation
            cursor={true}
            sequence={[
              'Grow Your Business',
              2000,
            ]}
            wrapper="h1"
            repeat={1}
           />
           <div className='build'>
          <h1 data-aos="fade-right">Build Your</h1>
          <div className="website" data-aos="fade-up" >

          <TypeAnimation
            cursor={true}
            sequence={[
              'Brand Identity',
              3000,
              'Marketing',
              3000,
              'Website',
              2000,
            ]}
            wrapper="h1"
            repeat={Infinity}
            />
            </div>
           </div>
          <Link to="contact" className='mt-5 button' spy={true} smooth={true} offset={-100} duration={300} data-aos="fade-up">START A PROJECT <BiChevronDown size={40} className="text-center"/> </Link>
        
        </div>
          
    </div>
  )
}

export default Hero