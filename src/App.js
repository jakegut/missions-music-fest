import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './sections/Home';
import Event from './sections/Event';
import About from './sections/About';
import Performers from './sections/Performers';
import Schedule from './sections/Schedule';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">MMF</a>
            </div>
        
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/event">The Event</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/performers">Performers</Link></li>
                <li><Link to="/schedule">Schedule</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        

        <Route exact path="/" component={Home}/>
        <Route path="/event" component={Event}/>
        <Route path="/about" component={About}/>
        <Route path="/performers" component={Performers}/>
        <Route path="/schedule" component={Schedule}/>
        
        </div>
      </Router>
    );
  }
}

export default App;
