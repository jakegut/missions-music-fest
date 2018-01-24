import React, { Component } from 'react';
import {
    Link
  } from 'react-router-dom';

export default class About extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 col-centered">
                        <h1>About Us</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-8 col-centered event-info">
                        <p>We organized Missions Music Fest to raise for Central Baptist Seniors for a mission trip to Roatán, Honduras. We worked hard to create a fun loving space for people to hang out and listen to amazing music.</p>
                        <p>The purpose was not just to raise money, but also to raise awareness for Honduras and for missionaries all over the world.</p>
                        <p>We have an amazing line up set up for y’all! It’s filled with artists from all over who all have amazing talent and can’t wait to share their voice and talent with y’all!</p>
                        <p>We hope you will come out to support the Central Seniors as we head out into the world helping others and spreading His name!</p>
                        <br />
                        <p><Link to="/performers">Who's performing?</Link></p>
                    </div>
                </div>
            </div>
        )
    }
}