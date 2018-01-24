import React, { Component } from 'react';
import {
    Link
  } from 'react-router-dom';

export default class Performers extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 col-centered">
                        <h1>Performers</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 col-sm-offset-2 event-info">
                        <p>Robyn Miller</p>
                        <p>Grace Costenbader/Marina Munoz</p>
                        <p>Hannah Franke</p>
                        <p>Brendan McIntyre/Teryn Walley</p>
                        <p>Shelbie Patino</p>
                        <p>Autumn Schultz</p>
                        <p>Emily Turner</p>
                    </div>
                    <div className="col-sm-4 event-info">
                        <p>Kelly Donnelly</p>
                        <p>Kylie Smith</p>
                        <p>John Gerzik</p>
                        <p>Jonathan Beikirch</p>
                        <p>Luke Miles</p>
                        <p>Mr. Cain</p>
                        <p>Maleigh Canon</p>
                    </div>
                    <div className="col-sm-8 col-centered event-info">
                        <br />
                        <p><Link to="/schedule">What's the schedule?</Link></p>
                    </div>
                    
                </div>
            </div>
        )
    }
}