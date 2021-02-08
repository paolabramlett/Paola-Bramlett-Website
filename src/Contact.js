import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./Contact.css";

export default function Contact() {
    return (
        <div>
            <Container>
            <br />
            <br />
                <h1>
                    <strong>Looking to collaborate?</strong>
                </h1>
                <h4>
                    Let's do it! Contact me!
                </h4>
                <br />
                <br />
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
                    <Form className="p-3">
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