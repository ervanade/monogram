import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css'
import logo from '../../assets/img/logo_prototype-05.png'
import { Image } from 'react-bootstrap'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar fixed-top">
        <div className="navbar-links_logo"> 
              <Image src={logo} alt="Logo" className='img-fluid'/>
        </div>
      <div className="navbar-links">
        <div className="navbar-links_container">
          <p><a href="#home">HOME</a></p>
          <p><a href="#aboutus">ABOUT US</a></p>
          <p><a href="#whatwedo">WHAT WE DO</a></p>
          <p><a href="#ourwork">OUR WORK</a></p>
          <p><a className='btn' href="#project">START A PROJECT</a></p>
        </div>
      </div>
      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navbar-menu_container scale-up-center">
          <div className="navbar-menu_container-links">
          <p><a href="#home">HOME</a></p>
          <p><a href="#aboutus">ABOUT US</a></p>
          <p><a href="#whatwedo">WHAT WE DO</a></p>
          <p><a href="#ourwork">OUR WORK</a></p>
          <p><a href="#project">START A PROJECT</a></p>
          </div>
        </div>
        )}
      </div>
      
    </div>
  );
};

export default Navbar;