import React, { useEffect} from 'react'
import { Col, Row, Container, Image } from 'react-bootstrap'
import about from '../../assets/img/about.jpg'
import './discover.css'
import { BiAnalyse } from 'react-icons/bi'
import AOS from "aos";
import "aos/dist/aos.css";

const Discover = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
           <Container className="mt-5 process">
            <Row >
                <Col md={5} className="image ">
                   <Image src={about} className="img" data-aos="fade-up-right" />
                </Col>
                <Col md={7} className='mt-3 ml-3'>
                  <h1 data-aos="flip-right">OUR PROCESS</h1>
                    <Row>
                      <Col md={6} className="item" data-aos="fade-up-right">
                        <BiAnalyse size={40} color="#000" className='icon' />
                        <h4>Discovery</h4>
                        <p>Before embarking on a project we look throughly into user behavior, the market sector and best practices. We cross-reference our finding with objective and desired project and goals.</p>
                      </Col>
                      <Col md={6} className="item" data-aos="fade-up-left">
                        <BiAnalyse size={40} color="#000" className='icon' />
                        <h4>Define</h4>
                        <p>After succesfully defining the audience we confirm the data and work toward a creative direction that feels unique, yet familiar with the audience. we experiment, finding the perfect blend of transformation and comfort</p>
                      </Col>
                      <Col md={6} className="item" data-aos="fade-up-right">
                        <BiAnalyse size={40} color="#000" className='icon' />
                        <h4>Strategy</h4>
                        <p>With objective in mind we form a strategy to achieve certain milestones and goals within a timeframe. Good results come with patience, perseverance, and compelling story.</p>
                      </Col>
                      <Col md={6} className="item" data-aos="fade-up-left">
                        <BiAnalyse size={40} color="#000" className='icon'/>
                        <h4>Application</h4>
                        <p>We implement design decisions and functionality across desired output and platforms - slowly manifesting the data and objectives the project.</p>
                      </Col>
                      <Col md={6} className="item" data-aos="fade-up-right">
                        <BiAnalyse size={40} color="#000" className='icon' />
                        <h4>Challenge</h4>
                        <p>Each decision is challenged, before and postlaunch of a project. the is no ‘one approach for all’ we venture alongside our clients on their journey, holding resolutions to account</p>
                      </Col>
                      <Col md={6} className="item" data-aos="fade-up-left">
                        <BiAnalyse size={40} color="#000" className='icon'  />
                        <h4>Refine</h4>
                        <p>By using data stripping unecessary we are able to iterate, improve and refine design objectives and the overall approach. it’s great to test ideas, but if it doens’t work don’t get attached.</p>
                      </Col>
                    </Row>
                </Col>
            </Row>
        </Container></div>
  )
}

export default Discover