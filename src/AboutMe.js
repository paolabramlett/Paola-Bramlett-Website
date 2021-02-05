import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Row';

export default function AboutMe() {
    return (
        <Container>
        <div className="AboutMe">
            <br />
            <br />
            <h2>
                About Me
            </h2>
            <Card>
                <Card.Body>This is some text within a card body.</Card.Body>
            </Card>
            <Row>
            
            <Col clasName="col-xs-6">
            <br />
            <br />
            <h3>
                Hi, I’m Paola.
            <br />
            <br />
                A Mexican Front End and React Developer,
            <br/>
                about to move to Montreal to study and work.
            </h3>
            </Col>
            <Col className="col-xs-6">
                <img src="/images/paolauno.PNG" className="mw-100"/>
            </Col>
            
            <Col sm={2}>
            <br />
            <br />
            <p>
                I’m from a small fishing and surfing town in Mexico called Puerto Escondido,
                I attended FilmSchool in Mexico City back in 2012 - 2015. Afterwards I specialized in
                Social Media Marketing with the SoMe Academy back in 2016-2017. Since then, I’ve been working as a Freelance Community Manager and Content Creator for over 13 companies in the State of Oaxaca.
            <br />
            <br />
                Over the last 4 years I’ve learnt a lot about graphic design and the creation of content that helped companies achieve their goals. I’m always eager to learn more.
            <br />
            <br />
                <strong>Feel free to contact me for any project collaboration.</strong>
            </p>
            </Col>
            <br />
            <br />
            </Row>

            
        </div>
        </Container>

    );
}