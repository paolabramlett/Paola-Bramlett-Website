import './App.css';
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Contact from "./Contact";
import Navbar from './Navbar';
import Experience from './Experience';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';




function App() {
  return (
    <Router>
      <Navbar />
    <div className="App">
      
    <Switch>
      <Route path="/" exact component={Home} /> 
      <Route path="/AboutMe" component={AboutMe} />
      <Route path="/Skills" component={Skills} />
      <Route path="/Contact" component={Contact} />
    </Switch>
    </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <Container>
        <header>
        <br />
              <h1>
                Paola Bramlett <em> - web developer</em>
              </h1>
              <br />
          <Row xs={2} md={2}> 
            <Col>
              <Image src="/images/IMG_2794.JPG" className="rounded mw-100 float-left" />
            </Col>
            <Col>
              <p>
                <strong>Hello, everyone! My name is Paola Monserrat Vásquez Bramlett,
                 aka Paola Bramlett.</strong> I am a mexican front end and React developer
                  looking for some great projects to be a part of. 
                  <br />
                  <br />
                  Recently graduated
                   from SheCodes Front End Development and React Development.
                    I'm a FilmSchool graduate who's been working in Social Media Marketing 
                    for small to medium businesses, creating valuable video and image
                     content for their social media platforms.
                     <br />
                     <br />
                     <strong>I'm always willing to learn and I enjoy taking new challanges. </strong>
              </p>
            </Col>
            </Row>
            </header>
            <br />
            <br />

            <Experience />
            <br />
          
        
      </Container> 
  </div>
);

export default App;
