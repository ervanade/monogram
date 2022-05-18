import React from 'react'
import { Col, Row, Container, Image } from 'react-bootstrap'
import about from '../../assets/img/about.jpg'

const Discover = () => {
  return (
    <div>
           <Container className="mt-5 about">
            <Row>
                <Col md={5}>
                   <Image src={about} width={400} />
                </Col>
                <Col md={7} className='mt-3'>
                    <p>MONOGRAM strives for excellence in creative and design innovation. We work closely with our clients to create holistic, contemporary brand experience - transforming businesses with imagination and belief. With our flexible, dedicated team of expert. We creat entirely new brand identities from the ground up - across a various set of industries, geographies and cultures.</p>
                </Col>
            </Row>
        </Container></div>
  )
}

export default Discover