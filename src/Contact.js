import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Contact.css";
import ContactForm from "./ContactForm";

export default function Contact() {
    return (

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
                    <ContactForm />
                    </Col>
                    
                </Row>
            </Container>
        
    )
}