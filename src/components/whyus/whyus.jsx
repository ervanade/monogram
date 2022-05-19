import React from 'react'
import { Col, Row, Container, Card } from 'react-bootstrap'
import './whyus.css'

const Whyus = () => {
  return (
    <div >
        <Container className='mt-5 whyus'>
            <Row><Col>
            <h1 className='text-center'>WHY US</h1>
            </Col></Row>
            <Row><Col md="{12}" className='mt-3'>
                    <p className='text-center '>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </Col></Row>
            <Row className='mt-3'>
                <Col md={4} >
                <Card style={{ width: '100%' }} className="box">
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
                </Col>
                <Col md={4}>
                <Card style={{ width: '100%' }} className="box">
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                <Card style={{ width: '100%' }} className="box">
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Whyus