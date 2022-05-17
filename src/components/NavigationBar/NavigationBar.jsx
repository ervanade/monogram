import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

const NavigationBar = () => {
  return (
    <div>
        <Navbar>
            <Container>
                <Navbar.Brand>
                    Monogram
                </Navbar.Brand>
                <Nav>
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link>About Us</Nav.Link>
                    <Nav.Link>What We Do</Nav.Link>
                    <Nav.Link>Our Work</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavigationBar