import React from 'react'
import './footer.css'
import { Container, Row, Col } from 'react-bootstrap'
import { BiChevronRight } from 'react-icons/bi'

const Footer = () => {
  return (
    <div className='footer mt-5'>
        <Container>
            <Row className='mt-5 pt-5' >
                <Col md={3}><h2>Monogram</h2></Col>
                <Col md={6}>
                <Row>
                    <Col md={6}>
                    <h3>Links</h3>
                <ul className='links'>
                    <li><BiChevronRight Size={50} className="right-icon" /><a href="#Home">Home</a></li>
                    <li><BiChevronRight Size={50} className="right-icon" /><a href="#Home">About Us</a></li>
                    <li><BiChevronRight Size={50} className="right-icon" /><a href="#Home">What We Do</a></li>
                    <li><BiChevronRight Size={50} className="right-icon" /><a href="#Home">Our Work</a></li>
                    <li><BiChevronRight Size={50} className="right-icon" /><a href="#Home">Home</a></li>
                </ul>
                    </Col>
                    <Col md={6}>
                    <h3>Services</h3>
                    <ul className='links'>
                    <li><BiChevronRight Size={50} className="right-icon" /><a href="#Home">Home</a></li>
                    <li><BiChevronRight Size={50} className="right-icon" /><a href="#Home">About Us</a></li>
                    <li><BiChevronRight Size={50} className="right-icon" /><a href="#Home">What We Do</a></li>
                    <li><BiChevronRight Size={50} className="right-icon" /><a href="#Home">Our Work</a></li>
                    <li><BiChevronRight Size={50} className="right-icon" /><a href="#Home">Home</a></li>
                </ul>
                    </Col>
                </Row>
                </Col> 
                <Col md={3}>News Later</Col>
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