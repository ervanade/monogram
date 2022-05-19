import React from 'react'
import { Container, Row, Col, Form, Button} from 'react-bootstrap'
import './contact.css'
const Contact = () => {
  return (
    <div>
        <Container className='contact'>
            <Row>
                <Col className='mt-5'><h1 className='text-center'>CONTACT</h1></Col>
            </Row>
            <div className='form mt-5'>
                <Form>
                    <Row>
                        <Col md={6} className="form-group" > 
                        <Form.Control type="text" placeholder="Your Name" />
                        </Col>
                        <Col md={6} className="form-group" > 
                        <Form.Control type="email" placeholder="Your Email" />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} className="form-group mt-3" > 
                        <Form.Control type="text" placeholder="Subject" />
                        </Col>
                    </Row>
                    <Row>
                    <Col md={12} className="form-group mt-3" >
                    <Form.Control as="textarea" rows={3} placeholder="Your Message"/>
                    </Col>
                    <div className='btn'>
                    <Button className='mt-3 button text-center'>SEND MESSAGE</Button>
                    </div>
                    </Row>
                </Form>
            </div>
        </Container>
    </div>
  )
}

export default Contact