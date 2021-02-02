import './App.css';
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Contact from "./Contact";
import Navbar from './Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Row';




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
            <Col sm={4}>
              
            </Col>
            <Col sm>Web Design</Col>
            <Col sm>Photography</Col>
            <Col sm>React</Col>
          </Row>
        </header>
      </Container> 
  </div>
);

export default App;
