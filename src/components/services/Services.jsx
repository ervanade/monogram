import React, { useEffect } from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'
import './services.css'
import { AiFillCamera, AiFillAppstore } from 'react-icons/ai'
import { BsBadge3DFill } from 'react-icons/bs'
import branding from '../../assets/img/portfolio/portfolio-1.jpg'
import marketing from '../../assets/img/portfolio/marketing.jpg'
import webdev from '../../assets/img/portfolio/webdev.jpg'
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <div>
        <Container className='mt-5 services'>
            <Row>
                <Col md={12}>
                    <h1 className='text-center' data-aos="zoom-in-up" >SERVICES</h1>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <p className='text-center mt-3' data-aos="zoom-in-down">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col className='d-flex justify-content-center align-items-center icon'>
                    <div className='box text-center' data-aos="flip-right" data-aos-duration="3000" data-aos-offset="300" ><Image src={branding}></Image></div>
                    <h3 className='text-center' data-aos="zoom-out">Branding</h3>
                    <p className='text-center mt-3' data-aos="zoom-out">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </Col>
                <Col className='d-flex justify-content-center align-items-center icon'>
                <div className='box text-center' data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine"><Image src={marketing}></Image></div>
                <h3 className='text-center' data-aos="zoom-out">Marketing</h3>
                <p className='text-center mt-3' data-aos="zoom-out">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </Col>
                <Col className='d-flex justify-content-center align-items-center icon'>
                <div className='box text-center' data-aos="flip-right" data-aos-duration="3000" data-aos-offset="300"><Image src={webdev}></Image></div>
                <h3 className='text-center' data-aos="zoom-out">Website Development</h3>
                <p className='text-center mt-3' data-aos="zoom-out">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col className='d-flex justify-content-center align-items-center icon'>
                    <div className='box text-center' data-aos="flip-right" data-aos-duration="3000" data-aos-offset="300"><AiFillAppstore color="#000" size={40} /></div>
                    <h3 className='text-center' data-aos="zoom-out">Application Development</h3>
                    <p className='text-center mt-3' data-aos="zoom-out">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </Col>
                <Col className='d-flex justify-content-center align-items-center icon'>
                <div className='box text-center' data-aos="fade-up" data-aos-offset="300" data-aos-easing="ease-in-sine"><AiFillCamera color="#000" size={40} /></div>
                <h3 className='text-center' data-aos="zoom-out">Photo Video</h3>
                <p className='text-center mt-3' data-aos="zoom-out">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </Col>
                <Col className='d-flex justify-content-center align-items-center icon'>
                <div className='box text-center' data-aos="flip-right" data-aos-duration="3000" data-aos-offset="300"><BsBadge3DFill color="#000" size={40} /> </div> 
                <h3 className='text-center' data-aos="zoom-out">Animation 2D/3D</h3>
                <p className='text-center mt-3' data-aos="zoom-out">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </Col>
            </Row>
            
        </Container>
    </div>
  )
}

export default Services