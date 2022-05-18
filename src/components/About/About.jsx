import React from 'react'
import { Col, Row, Card, Container } from 'react-bootstrap'
import './about.css'

const About = () => {
  return (
    <div>
            <Container className="mt-3 about">
            <Row>
                <Col md="{12}">
                   <h1 className='text-center'>About Us</h1>
                </Col>
                <Col md="{12}" className='mt-3'>
                    <p className='text-center '>MONOGRAM strives for excellence in creative and design innovation. We work closely with our clients to create holistic, contemporary brand experience - transforming businesses with imagination and belief. With our flexible, dedicated team of expert. We creat entirely new brand identities from the ground up - across a various set of industries, geographies and cultures.</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default About