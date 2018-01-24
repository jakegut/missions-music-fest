import React, { Component } from 'react';
import {
    Link
  } from 'react-router-dom'

export default class Event extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 col-centered">
                        <h1>The Event</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-8 col-centered event-info">
                        <p>Starting at 7pm on Feburary 17, 2018 at 1510 Misty Ln</p>
                        <p>With live music, baked goods, and a photo booth</p>
                        <p>Tickets: $5 for everyone</p>
                        <p>Bring your own blanket or chair</p>
                        <br />
                        <p><Link to="/about">What are we doing?</Link></p>
                    </div>
                </div>
            </div>
        )
    }
}