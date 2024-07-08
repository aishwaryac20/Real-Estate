
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Services = () => {
  return (
    <section id="Services" className="py-5">
      <Container>
        <h2 className="text-center mb-5">Our Services</h2>
        <Row>
          <Col md={6} className="service-item">
            <h4>Agents/Brokers</h4>
            <p>We assist clients in finding and purchasing their dream homes, providing expert guidance throughout the buying process.</p>
            
          </Col>
          <Col md={6} className="service-item">
            <h4>Builders/Developers</h4>
            <p>We help clients sell their properties quickly and at the best possible price, leveraging our extensive network and marketing expertise.</p>
           
          </Col>
        </Row>
        <Row>
          <Col md={6} className="service-item">
            <h4>Rental Services</h4>
            <p>We offer comprehensive rental services, helping tenants find suitable rental properties and assisting landlords in managing their rental properties.</p>
           
          </Col>
          <Col md={6} className="service-item">
            <h4>Vastu Consultant</h4>
            <p>Our property management services include property maintenance, tenant screening, rent collection, and lease administration, ensuring hassle-free property ownership.</p>
            
          </Col>
        </Row>
      
          
        
          
      </Container>
    </section>
  );
};

export default Services;
