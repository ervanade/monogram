import React from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'
import './services.css'

const Services = () => {
  return (
    <div>
        <Container className='mt-5'>
            <Row>
                <Col md={12}>
                    <h1 className='text-center'>Services</h1>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <p className='text-center'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col className='d-flex justify-content-center align-items-center icon'>
                    <h3 className='text-center'>Branding</h3>
                    <div className='box text-center'><Image src=''></Image></div>
                    <p className='text-center'>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </Col>
                <Col className='d-flex justify-content-center align-items-center icon'>
                <h3 className='text-center'>Marketing</h3>
                <div className='box text-center'><Image src=''></Image></div>
                <p className='text-center'>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </Col>
                <Col className='d-flex justify-content-center align-items-center icon'>
                <h3 className='text-center'>Website Development</h3>
                <div className='box text-center'><Image src=''></Image></div>
                <p className='text-center'>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col className='d-flex justify-content-center align-items-center icon'>
                    <h3 className='text-center'>Branding</h3>
                    <div className='box text-center'><Image src=''></Image></div>
                    <p className='text-center'>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </Col>
                <Col className='d-flex justify-content-center align-items-center icon'>
                <h3 className='text-center'>Marketing</h3>
                <div className='box text-center'><Image src=''></Image></div>
                <p className='text-center'>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </Col>
                <Col className='d-flex justify-content-center align-items-center icon'>
                <h3 className='text-center'>Website Development</h3>
                <div className='box text-center'><Image src=''></Image></div>
                <p className='text-center'>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </Col>
            </Row>
            
        </Container>
    </div>
  )
}

export default Services