import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import AboutTitle from './AboutTitle';

export default function AboutMe() {
    const pStyle = {
        textAlign: 'justify'
      };
    return (
        <Container>
        
            <br />
            <br />
            <AboutTitle />
            <br />
            <br />
            
            <Row xs={1} md={2} lg={2} className="row row-cols-xs-auto g-3 align-items-center">
            
            <Col md className="d-inline-block">
                <Image src="/images/paolados-13.jpg" fluid />
            </Col>
            <Col md className="d-inline-block">
            <br />
            <br />
            <h3>
                Hi, I’m Paola.
            <br />
            <br />
                A Mexican React Front-End Developer 
            <br/>    
                and Content Creator
            <br/>
                about to move to Montreal
            <br />   
                to study and work.
            </h3>
            <br />
            
            </Col>      
            
            <Col md className="d-inline-block"> 
            
            <br />
            <p style={pStyle}>
                I’m from a small fishing and surfing town in Mexico called Puerto Escondido,
                I attended FilmSchool in Mexico City back in 2012 - 2015. Afterwards I specialized in
                Social Media Marketing with the SoMe Academy back in 2016-2017. Since then, I’ve been working as a Freelance Community Manager and Content Creator. 
            <br />
            <br />
            I started my own studio so I could collaborate with other creators and enhance creativity by sharing ideas and points of view, and help others learn different
             things we've all learned through experience.
            </p>
        
            </Col>
            <Col md className="d-inline-block"> 
            <p style={pStyle}>
            <br />          
            Over the last 4 years I’ve learned a lot about graphic design and the creation of content that helped companies achieve their advertising goals. 
            I've connected with the vision of over 13 companies in the State of Oaxaca, Mexico. I'm always learning and growing, and I enjoy discovering new places 
            and projects. That's why I've chosen to study and work in Montreal, Canada for the next 2 years, so I can meet new people to collaborate with, and hopefully 
            find a vision to connect and align my own with.
            <br />
            <br />
                <strong>Feel free to <a href="/Contact">contact me </a> for any future collaboration.</strong>
            </p>
            <br />
            <br />
            </Col>
            
            
            </Row>
            

            
        
        </Container>

    );
}