import React, { Component } from 'react';
import {
    Link
  } from 'react-router-dom'

export default class Home extends Component{
    render(){
    return(
        <div id="home" className="section">
            <div className="container">
                <div className="row text-center">
                    <div className="col-sm-12 title">
                        <h1>Missions</h1>
                        <h2>Music Fest</h2>
                        <h3><Link to="/event">Learn More</Link></h3>
                    </div>
                </div>
            </div>
        </div>
    )
    }
}