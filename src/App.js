import './App.css';
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Contact from "./Contact";
import Navbar from './Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



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
    <h1>
      Home
    </h1>
  </div>
);

export default App;
