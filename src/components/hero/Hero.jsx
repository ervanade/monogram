import React, { useEffect } from 'react'
import videoBg from '../../assets/img/background.mp4'
import './hero.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-scroll'
import { BiChevronDown } from 'react-icons/bi'


const Hero = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
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
          <h1 data-aos="fade-up">Grow your Business</h1>
          <h1 data-aos="fade-right">Build Your Website</h1>
          <Link to="contact" className='mt-3 button' spy={true} smooth={true} offset={-300} duration={300} data-aos="fade-up">START A PROJECT <BiChevronDown size={40} className="text-center"/> </Link>
        </div>
          
    </div>
  )
}

export default Hero