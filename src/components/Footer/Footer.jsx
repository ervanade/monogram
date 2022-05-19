import React from 'react'
import './footer.css'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className='footer mt-5'>
        <Container>
            <Row className='mt-5 pt-5' >
                <Col>Monogram</Col>
                <Col>
                <h3>Links</h3>
                <ul>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#Home">About Us</a></li>
                    <li><a href="#Home">What We Do</a></li>
                    <li><a href="#Home">Our Work</a></li>
                    <li><a href="#Home">Home</a></li>
                </ul>
                </Col>
                <Col>Services</Col>
                <Col>News Later</Col>
            </Row>
        </Container>
        <Container>
            <div className='copyright'>
                
            </div>
        </Container>
    </div>
  )
}

export default Footer