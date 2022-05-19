import React from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'
import './services.css'
import { AiFillCamera, AiFillAppstore } from 'react-icons/ai'
import branding from '../../assets/img/portfolio/portfolio-1.jpg'
import marketing from '../../assets/img/portfolio/marketing.jpg'
import webdev from '../../assets/img/portfolio/portfolio-2.jpg'

const Services = () => {
  return (
    <div>
        <Container className='mt-5 services'>
            <Row>
                <Col md={12}>
                    <h1 className='text-center'>SERVICES</h1>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <p className='text-center mt-3'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col className='d-flex justify-content-center align-items-center icon'>
                    <h3 className='text-center'>Branding</h3>
                    <div className='box text-center'><Image src={branding}></Image></div>
                    <p className='text-center mt-3'>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </Col>
                <Col className='d-flex justify-content-center align-items-center icon'>
                <h3 className='text-center'>Marketing</h3>
                <div className='box text-center'><Image src={marketing}></Image></div>
                <p className='text-center mt-3'>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </Col>
                <Col className='d-flex justify-content-center align-items-center icon'>
                <h3 className='text-center'>Website Development</h3>
                <div className='box text-center'><Image src={webdev}></Image></div>
                <p className='text-center mt-3'>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col className='d-flex justify-content-center align-items-center icon'>
                    <h3 className='text-center'>Application Development</h3>
                    <div className='box text-center'><AiFillAppstore color="#000" size={40} /></div>
                    <p className='text-center mt-3'>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </Col>
                <Col className='d-flex justify-content-center align-items-center icon'>
                <h3 className='text-center'>Photo Video</h3>
                <div className='box text-center'><AiFillCamera color="#000" size={40} /></div>
                <p className='text-center mt-3'>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </Col>
                <Col className='d-flex justify-content-center align-items-center icon'>
                <h3 className='text-center'>Animation 2D/3D</h3>
                <div className='box text-center'></div> 
                <p className='text-center mt-3'>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </Col>
            </Row>
            
        </Container>
    </div>
  )
}

export default Services