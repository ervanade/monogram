import React from 'react'
import { Col, Row, Container, Image } from 'react-bootstrap'
import about from '../../assets/img/about.jpg'
import './discover.css'

const Discover = () => {
  return (
    <div>
           <Container className="mt-5 process">
            <Row>
                <Col md={5} className="image">
                   <Image src={about} className="img" />
                </Col>
                <Col md={7} className='mt-3'>
                  <h1 className='text-center'>OUR PROCESS</h1>
                    <p className='mt-3 text-center'>MONOGRAM strives for excellence in creative and design innovation. We work closely with our clients to create holistic, contemporary brand experience - transforming businesses with imagination and belief. With our flexible, dedicated team of expert. We creat entirely new brand identities from the ground up - across a various set of industries, geographies and cultures.</p>
                </Col>
            </Row>
        </Container></div>
  )
}

export default Discover