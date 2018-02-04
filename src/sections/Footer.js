import React, { Component } from 'react';
import instagram from '../images/instagram.png';
import twitter from '../images/twitter.png';
import facebook from '../images/facebook.png';

export default class Footer extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Contact Us</h2>
                        <h3>Email: <a href="mailto:Callie.E.Fowler@gmail.com">Callie.E.Fowler(@)gmail.com</a></h3>
                        <h3>Phone Number: +1 (979) 777-3562</h3>
                        <div className="social">
                            <a href="https://www.instagram.com/missionsmusicfest"><img src={instagram}/></a>
                            <a href="https://twitter.com/FestMissions"><img src={twitter}/></a>
                            <a href="https://www.facebook.com/groups/1934228903315834/"><img src={facebook}/></a>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <h2>Website made by: <a href="http://jakerg.me">Jake Gutierrez</a></h2>
                    </div>
                </div>
            </div>
        )
    }
}