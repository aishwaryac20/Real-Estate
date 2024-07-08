
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';


const AboutUs = () => {
  return (
    <section id="about-us" className="py-5">
      <Container>
        <h2 className="text-center mb-4">About Us</h2>
        <Row className="justify-content-center">
          <Col md={6} className="about-section mb-4">
            <h4>Who We Are</h4>
            <p>Luxury Residences, A Mahareastra (Pune) based venture is a full service Real Estate firm that tailors its services to the satisfaction of our clients.</p>

          </Col>
          <Col md={6} className="about-section mb-4">
            <h4>Our Mission</h4>
            <p>“Our mission is to provide the consumer with the highest level of service of any Real Estate company thereby ensuring that properties are sold or leased in an exemplary manner. We endeavor to deliver professional service to clients and customers so that transactions are completed to the satisfaction of all concerned.”</p>

          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={6} className="about-section mb-4">
            <h4>Our Vision</h4>
            <p>A vision statement is designed to be an inward facing statement that is directed towards individuals that work with or for your company or those that are deciding to take an opportunity with your firm</p>

          </Col>
          <Col md={6} className="about-section mb-4">
            <h4>Our Values</h4>
            <p>A company’s value statement is used as a guide to help employees and owners make their most important decisions. </p>

          </Col>
        </Row>



        <Row className="justify-content-center mt-5">
          <Col md={6} className="text-center">
            {/* <h4>Follow Us</h4> */}
            <div className="icons" style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>

              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="social-icon" /></a>


              <div><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook className="social-icon" /></a></div>
              <div><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram className="social-icon" /></a></div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
