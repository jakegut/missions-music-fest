import React, { Component } from 'react';
import {
    Link
  } from 'react-router-dom';

export default class Schedule extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 col-centered">
                        <h1>Schedule</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-8 col-centered event-info">
                        <p>In Development</p>
                    </div>
                </div>
            </div>
        )
    }
}