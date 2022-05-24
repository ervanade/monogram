import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css'
import logo from '../../assets/img/logo_prototype-05.png'
import { Image } from 'react-bootstrap'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar fixed-top">
        <div className="navbar-links_logo"> 
            <Link to='hero'>
              <Image src={logo} alt="Logo" className='img-fluid'/>
            </Link>
        </div>
      <div className="navbar-links">
        <ul>
          <li className='nav-item'><Link to="hero" spy={true} smooth={true} offset={-100} duration={300}>HOME</Link></li>
          <li className='nav-item'><Link to="about" spy={true} smooth={true} offset={-150} duration={300}>ABOUT US</Link></li>
          <li className='nav-item'><Link to="services" spy={true} smooth={true} offset={-100} duration={300}>WHAT WE DO</Link></li>
          <li className='nav-item'><Link to="whyus" spy={true} smooth={true} offset={-100} duration={300}>OUR WORK</Link></li>
          <li ><Link className="btn"to="contact" spy={true} smooth={true} offset={-50} duration={300}>START A PROJECT</Link></li>
        </ul>
        {/* <div className="navbar-links_container">
          <p><a href="#home">HOME</a></p>
          <p><Link className='nav-item' to="about" spy={true} smooth={true} offset={-100} duration={300}>ABOUT US</Link></p>
          <p><a href="#whatwedo">WHAT WE DO</a></p>
          <p><a href="#ourwork">OUR WORK</a></p>
          <p><a className='btn' href="#project">START A PROJECT</a></p>
        </div> */}
      </div>
      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navbar-menu_container scale-up-center">
          <div className="navbar-menu_container-links">
          <p><Link to="hero" spy={true} smooth={true} offset={-100} duration={300}>HOME</Link></p>
          <p><Link to="about" spy={true} smooth={true} offset={-150} duration={300}>ABOUT US</Link></p>
          <p><Link to="services" spy={true} smooth={true} offset={-100} duration={300}>WHAT WE DO</Link></p>
          <p><Link to="whyus" spy={true} smooth={true} offset={-100} duration={300}>OUR WORK</Link></p>
          <p><Link to="contact" spy={true} smooth={true} offset={-50} duration={300}>START A PROJECT</Link></p>
          </div>
        </div>
        )}
      </div>
      
    </div>
  );
};

export default Navbar;