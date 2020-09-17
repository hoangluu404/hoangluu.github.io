import React from 'react';
import Contacts from '../components/contactForm';
import YoutubeVideo from '../components/youtubeVideo';
import NavigationBar from '../components/NavigationBar';
import logo from '../logo.svg';
import Card from '../components/card';
import {Link} from 'react-router-dom';


const Projects = () => {
    return (
        <div>
            
            <NavigationBar/>

            <div className="App" style={{transform: 'scale(0.5)'}}>

                <img src={logo} className="App-logo" alt="logo"/>
            </div>
            <div>
                <h1><b>Projects</b></h1>

                <header className="header">
            
                <p>
                <code>by Hoang Luu</code>
                </p>
                <p>This website is still under development</p>
                </header>
                <body className="App">
                    <Card>
                        <div style={{display: "flex", justifyContent: "center", margin: "1%"}}>
                            <div style={{margin: "1%", textAlign: "left"}}> 
                                <div>
                                    <b>Personal project: Journey to Android</b>
                                </div>
                                <div>
                                    <small><i>Project in Kotlin - recorded on Samsung Galaxy S20</i></small>
                                </div>
                                <div>
                                    Demo includes:
                                    <ul>
                                        <li>Random Dice Roller</li>
                                        <li>Simple Todo List</li>
                                        <li>9 Grids Gallery with GET requests</li>
                                        <li>Instagram username look up</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div style={{margin: "1%", textAlign: "left"}}><YoutubeVideo videoID="vdYlHgyqKqY" height="500" width="225"/></div>
                            
                        </div>
                    </Card>
                    
                    <Card>
                        <div style={{display: "flex", justifyContent: "center", margin:"1%"}}>
                            <div style={{margin: "1%", textAlign: "left"}}> 
                                <div>
                                    <b>Ly Agency</b>
                                </div>
                                <div>
                                    <small><i>Insurance Agency website</i></small>
                                </div>
                                <div>
                                    Demo includes:
                                    <ul>
                                        <li>Ly Agency website at <a href="http://www.lyagency.com">www.lyagency.com</a></li>
                                        <li>Simple Contact form</li>
                                        <li>Simple Google map integration</li>
                                        <li>Simple Calender/Schedule integration</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div><YoutubeVideo videoID="VSw0XDLmJl8" height="315" width="500"/></div>
                            
                        </div>
                    </Card>
                    <Card>
                        <div style={{display: "flex", justifyContent: "center", margin:"1%"}}>
                            <div style={{margin: "1%", textAlign: "left"}}> 
                                <div>
                                    <b>Texting services</b>
                                </div>
                                <div>
                                    <small><i>Mass texting program</i></small>
                                </div>
                                <div>
                                    Demo includes:
                                    <ul>
                                        <li>Sending a customized message to a number</li>
                                        <li>Sending message to all numbers within an Excel File</li>
                                        <li>Keep track of which number was sent to in Excel File</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div><YoutubeVideo videoID="VSw0XDLmJl8" height="315" width="500"/></div>
                            
                        </div>
                        
                        
                    </Card>
                    
                </body>
        
            </div>
        
        </div>

    );
}

export default Projects;