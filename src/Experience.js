import React from "react";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

export default function Websites() {
    return (
        <div>
            <h1>
                Websites and Apps I've developed.
            </h1>
            <Container>
            <Row>
                <Col sm>Web Design</Col>
                <Col sm>Photography</Col>
                <Col sm>React</Col>
            </Row>
            </Container>
        </div>
    )
}