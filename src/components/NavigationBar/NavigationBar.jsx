import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import './navbar.css'


const NavigationBar = () => {
  return (
      
    <div >
        <Navbar variant="dark" fixed="top" className='bg'>
    <Container>
    <Navbar.Brand href="#home">Monogram</Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#whatwedo">What We Do</Nav.Link>
      <Nav.Link href="#ourwork">Our Work</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

    </div>

     
  )
}

export default NavigationBar