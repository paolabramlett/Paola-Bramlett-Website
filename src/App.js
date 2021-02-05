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
          <Row>
            <Col sm={8}>
              <h1>
                Paola Bramlett <em> - web developer</em>
              </h1>
            </Col>
            <Col xs={6} md={4}>
              <Image src="/images/IMG_2794.JPG" className="thumbnail mx-auto d-block" />
            </Col>
            <Experience />
          </Row>
        </header>
      </Container> 
  </div>
);

export default App;
