import React from 'react'
import './footer.css'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { BiChevronRight } from 'react-icons/bi'
import { Link } from 'react-scroll'
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
    return (
      <>
    <div className='footer mt-5'>
        <Container>
            <Row className='mt-5 pt-5' >
                <Col md={3} data-aos="fade-up"><h2>Monogram</h2>
                <p>
                Rasantika Twin<br/>
                Jl Pejaten Barat 17A.<br/>Jakarta Selatan 12510<br/>
                <strong>Phone:</strong>  +6221 7197119 | 7804360<br/>
                <strong>Email:</strong> info@example.com<br/>
                 </p>
                 <div className='mt-3 mb-3 mr-3'>
                 <a href="http://twitter.com" className="twitter mr-3"><BsTwitter className='mr-3' Size={70}/></a>
                <a href="http://facebook.com" className="facebook mr-3"><BsFacebook /></a>
                <a href="http://instagram.com" className="instagram mr-3"><BsInstagram /></a>
                <a href="http://youtube.com" className="google-plus mr-3"><BsYoutube /></a>
                 </div>
                </Col>
                <Col md={6} data-aos="fade-up">
                <Row>
                    <Col md={6}>
                    <h3>Links</h3>
                <ul className='links'>
                    <li><BiChevronRight Size={50} className="right-icon" /><Link to="hero" spy={true} smooth={true} offset={-100} duration={300}>Home</Link></li>
                    <li><BiChevronRight Size={50} className="right-icon" /><Link to="about" spy={true} smooth={true} offset={-120} duration={300}>About Us</Link></li>
                    <li><BiChevronRight Size={50} className="right-icon" /><Link to="services" spy={true} smooth={true} offset={-100} duration={300}>What We Do</Link></li>
                    <li><BiChevronRight Size={50} className="right-icon" /><Link to="whyus" spy={true} smooth={true} offset={-100} duration={300}>Our Work</Link></li>
                    <li><BiChevronRight Size={50} className="right-icon" /><Link to="contact" spy={true} smooth={true} offset={-50} duration={300}>Contact</Link></li>
                </ul>
                    </Col>
                    <Col md={6} data-aos="fade-up">
                    <h3>Services</h3>
                    <ul className='links'>
                    <li><BiChevronRight Size={50} className="right-icon" /><a href="#Home">Web Design</a></li>
                    <li><BiChevronRight Size={50} className="right-icon" /><a href="#Home">Web Development</a></li>
                    <li><BiChevronRight Size={50} className="right-icon" /><a href="#Home">Product Management</a></li>
                    <li><BiChevronRight Size={50} className="right-icon" /><a href="#Home">Marketing</a></li>
                    <li><BiChevronRight Size={50} className="right-icon" /><a href="#Home">Graphic Design</a></li>
                </ul>
                    </Col>
                </Row>
                </Col> 
                <Col md={3} data-aos="fade-up">
                    <h3>
                    Our News Later
                    </h3>
                        <p>Tamen quem nulla quae legam multos aute sint culpa</p>
                        <Form>
                         <Row>
                        <Col md={9} className="form-group" data-aos="fade-up-right"> 
                        <Form.Control type="text"/>
                        </Col>
                        <Col md={3} className="form-group" data-aos="fade-up-left"> 
                        <Button>Subscribe</Button>
                        </Col>
                    </Row>
                        </Form>
                    </Col>
            </Row>
        </Container>
    </div>
            <div className='copyright' >
            <Container>

            <Row>
                <Col md={12}>
                    <div>
                        <p>
                    &copy; Copyright <strong><span>CPXi Asia</span></strong>. All Rights Reserved
                        </p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <div>
                        <p>
                        Designed by <a href="https://cpxi-asia.com/">CPXi Asia</a>
                        </p>
                    </div>
                </Col>
            </Row>
            </Container>
            </div>
            </>
  )
}

export default Footer