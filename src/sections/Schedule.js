import React, { Component } from 'react';

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
                    <div className="col-sm-4 col-centered event-info">
                        <div>
                            <p>6:30pm - Gates open</p>
                            <p>7:00pm - Event starts</p>
                            <p>7:10pm - Introduction</p>
                            <p>7:30pm - First round of performers</p>
                            <p>8:15pm - Intermission</p>
                            <p>8:45pm - Second round of performers</p>
                            <p>9:45pm - Closing remarks</p>
                            <p>10:00pm - Gates close</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}