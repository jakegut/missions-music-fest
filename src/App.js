import React, { Component } from 'react';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor'
import Home from './sections/Home';
import Event from './sections/Event';
import About from './sections/About';
import Performers from './sections/Performers';
import Schedule from './sections/Schedule';
import Footer from './sections/Footer';

configureAnchors({offset: -60, scrollDuration: 500});

class App extends Component {
  render() {
    return (
        <div>
          <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#home">MMF</a>
            </div>
        
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li className="nav-link"><a href="#home">Home</a></li>
                <li className="nav-link"><a href="#event">The Event</a></li>
                <li className="nav-link"><a href="#about">About Us</a></li>
                <li className="nav-link"><a href="#performers">Performers</a></li>
                <li className="nav-link"><a href="#schedule">Schedule</a></li>
              </ul>
            </div>
          </div>
        </nav>
        
        <div className="wrapper">
        <ScrollableAnchor id={'home'}>
          <div className="page-area-home">
            <Home />
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'event'}>
          <div className="page-area">
            <Event />
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'about'}>
          <div className="page-area">
            <About />
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'performers'}>
          <div className="page-area">
            <Performers />
          </div>
        </ScrollableAnchor>
        <ScrollableAnchor id={'schedule'}>
          <div className="page-area">
            <Schedule />
          </div>
        </ScrollableAnchor>
        </div>
        
        <div className="footer">
          <Footer />
        </div>
        
      </div>
    );
  }
}

export default App;
