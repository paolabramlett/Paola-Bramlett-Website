import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Skills.css';

export default function Skills() {
    return (
        <div>
            <Container>
            <br />
            <br />
            <h2>
                Skills
            </h2>
            <br />
            <br />
            <p>
                Over the last 4 years I've worked with several apps and platforms to provide the best quality content to my clients and collaborators.
                <br />
                <br />
                <strong>These are some of them:</strong>
                <br />
                <br />
            </p>
                <Row className="justify-content-md-center">
                    <Col xs={6} md={4}>
                    <img src="/images/Logo-01.png" alt="logo" className="mw-25 p-3" />                 
                    </Col>
                    <Col xs={6} md={4}>
                    <img src="/images/Logo-02.png" alt="logo" className="mw-25 p-3" />                 
                    </Col>
                    <Col xs={6} md={4}>
                    <img src="/images/Logo-03.png" alt="logo" className="mw-25 p-3" />                 
                    </Col>
                    <Col xs={6} md={4}>
                    <img src="/images/Logo-04.png" alt="logo" className="mw-25 p-3" />                 
                    </Col>
                    <Col xs={6} md={4}>
                    <img src="/images/Logo-05.png" alt="logo" className="mw-25 p-3" />                 
                    </Col>
                    <Col xs={6} md={4}>
                    <img src="/images/Logo-06.png" alt="logo" className="mw-25 p-3" />                 
                    </Col>
                    <Col xs={6} md={4}>
                    <img src="/images/Logo-07.png" alt="logo" className="mw-25 p-3" />                 
                    </Col>
                    <Col xs={6} md={4}>
                    <img src="/images/Logo-08.png" alt="logo" className="mw-25 p-3" />                 
                    </Col>
                    <Col xs={6} md={4}>
                    <img src="/images/Logo-09.png" alt="logo" className="mw-25 p-3" />                 
                    </Col>
                    <Col xs={6} md={4}>
                    <img src="/images/Logo-10.png" alt="logo" className="mw-25 p-3" />                 
                    </Col>
                    <Col xs={6} md={4}>
                    <img src="/images/Logo-11.png" alt="logo" className="mw-25 p-3" />                 
                    </Col>
                </Row>
                 <Row>
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>
        </div>
    )
}