import './App.css';
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Contact from "./Contact";
import Navbar from './Navbar';
import HomeTitle from './HomeTitle';
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

const pStyle = {
  textAlign: 'justify'
};

const h1Style = {
  color: 'white'
};



const Home = () => (
  
    <Container>
        <header>
        <br />
        <br />
              
              <HomeTitle />    
        <br />
        <br />  
        <br />
            
              
          <Row xs={1} md={2} lg={2}> 
            <Col md className="position-relative">
              <Image src="/images/IMG_2794-13.JPG" fluid />
            </Col>
            <Col md className="position-relative">
          
              <h3>
              <br />
              <br />
                <strong>Hello, everyone!<br /> <br />My name is Paola Monserrat Vásquez Bramlett,
                 <br /> <em>a.k.a.</em> Paola Bramlett.</strong>
              </h3>   
                 <p style={pStyle}>I am a mexican Front End and React developer
                  looking for some great projects to be a part of. 
                  <br />
                  <br />
                  I recently graduated
                   from SheCodes Front End Development and React Development workshops.
                    I'm a FilmSchool graduate who's been working in Social Media Marketing 
                    for small and medium size businesses over the last 4 years. Creating valuable video, audio and image
                     content for social media platforms. Discovering and developing new
                     abilities along the way. 
                     <br />
                     <br />
                     <h3><strong>I'm passionate about learning and I always enjoy taking on new challanges. </strong></h3>
              </p>
            </Col>
            </Row>
            </header>
            
            <br />
            <br />
            <br />
            <br />
            <h1 style={h1Style}>
              <em>"My main goal is to see YOU achieve YOURS"</em>
            </h1>
            <br />
            <br />
            <br />
            <br />
          
          
        
      </Container> 
  
);

export default App;
