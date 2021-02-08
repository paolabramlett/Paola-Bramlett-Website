import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./ContactForm.css";

export default function ContactForm (){
    return (
        <div>
        
            <Container>
            <Row xs={1} md={2}>
                
                <Col>
                    <h2>
                        Contact Info
                    </h2>
                    <ul>
                        <li>
                            <strong>e-mail:</strong> paolabramlett@gmail.com
                        </li>
                        <li>
                            <strong>Phone number:</strong> +52 (951) 408 2852
                        </li>
                        <li>
                        <strong><a href="https://www.instagram.com/paolabramlett/" target="_blank" rel="noreferrer">Instagram</a></strong>
                        </li>
                        <li>
                            <strong><a href="https://www.linkedin.com/in/paolabramlett/" target="_blank" rel="noreferrer">LinkedIn</a></strong>
                        </li>
                    </ul>
                </Col>
                <Col>
                <ContactForm />
                </Col>
                
                <Col>
                <Form name="contact v1" method="post" data-netlify="true" onSubmit="submit" className="p-3">
                    <input type="hidden" name="form-name" value="contact v1" />
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label className="text-white">Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="text-white">Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="mt-3">
                        Send
                    </Button>
                </Form>
                </Col>
                
            </Row>
        </Container>
        </div>
    )
}