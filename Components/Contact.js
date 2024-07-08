
import React from 'react';
import {  Row, Col, Form, Button } from 'react-bootstrap';

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <>
    

    <section id="contact-us" className="py-5 bg-light">

      <div className='Container d-flex'>
<div className='contactinfo'>
          <h2 className="text-center mb-5">Contact Us</h2>
          <Row className="mb-5">
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <p>Contact us at: +91 1234567980</p>
          
            </Col>
          </Row>
          <div className='Row'>
            <Col lg={{ span: 8, offset: 2 }}>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label>Mobile No</Form.Label>
                  <Form.Control type="Phone" placeholder="Enter Number" />
                </Form.Group>
               
                <div className="mb-3"></div>
                <div className="text-center">
                  <Button variant="inherit" type="Submit" className='w-100'>
                    Submit
                  </Button>
                </div>
              </Form>
            </Col>
          </div>
        </div>


      </div>
    </section>
    </>
  );
};

export default ContactUs;
