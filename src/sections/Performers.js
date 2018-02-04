import React, { Component } from 'react';

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
                        <p>Brendan McIntyre</p>
                        <p>Autumn Schultz</p>
                        <p>Emily Turner/Jonathan Beikirch</p>
                    </div>
                    <div className="col-sm-4 event-info">
                        <p>Brooks Derkowski</p>
                        <p>Kylie Smith</p>
                        <p>John Gerzik</p>
                        <p>Luke Miles/Axel Pena</p>
                        <p>Maleigh Canon</p>
                        <p>John Gerzik</p>
                    </div>
                </div>
            </div>
        )
    }
}