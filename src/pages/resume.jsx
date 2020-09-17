import React from 'react';
import NavigationBar from '../components/NavigationBar';
import Card from '../components/card';
const Resume = () => {
    return (
        <div>
            <NavigationBar/>
            <div style={{marginRight:'5%', marginLeft:'5%'}}>
                
                <h1>Hoang Luu</h1>
                <small>(817) 987 3276 | hoangluu404@gmail.com | LinkedIn: <a href="https://www.linkedin.com/in/hoangluu0/">Hoang Luu</a></small>

                <hr></hr>
                
                <div align="left">
                    <Card>
                        <h5>Education</h5>
                        <div><b>The University of Texas at Arlington</b>  <small> - Expected Spring 2021</small></div>
                        <div><small><b><i>B.S. in Computer Science Engineering</i></b></small></div>
                    </Card>
                    <hr></hr>
                    <Card>
                        <h5>Skills and Abilities</h5>
                        <div>
                            <ul>
                                <li><b>Language:</b> Kotlin, C++, C, Python, React/JavaScript, Java, Html</li>
                                <li><b>Relevant courses:</b> Object-oriented Programming, Computer Network Organization, Fundamental of Software Design, Discrete Structures, Algorithms and Data Structures, Statistics, Linear Algebra, Theoretical CS, Programming Languages, Operating System</li>
                                <li><b>Additional Technologies:</b> Android Studio, React, GoogleAPI, RapidAPI, Version Control GIT, Linux</li>
                            </ul>
                        </div>
                    </Card>
                    <hr></hr>
                    <Card>
                        <h5>Relevant Projects</h5>
                        <div>
                            <ul>
                                <p>
                                    <li><b>Journey to Android:</b> self-taught Android project in kotlin</li>
                                    <div>A standalone Android application that demonstrate to user my ability to develop android applications in Kotlin</div>
                                    <div>Including: Dice roller, To-do list, Gallery, and <b>Instagram</b> username lookup</div>
                                </p>
                                <p>
                                    <li><b>Poker++:</b> an Object-Oriented Gaming Program written in C++ using GTKMM library</li>
                                    <div>The program consists of 1 Server/Dealer and multiple Clients/Players program</div>
                                    <div>The Dealer is automatic, each Player is a human using a Graphical User Interface on a computer</div>
                                    <div>The Dealer based on the hand of the Players determines who wins</div>
                                </p>
                                <p>
                                    <li><b>Animal Shelter:</b> an Object-Oriented Program written in C++ using GTKMM library</li>
                                    <div>The program focuses on the Object-Oriented Programming as well as the Graphical User Interface using GTKMM</div>
                                    <div>As an Animal Shelter, the owner could create more shelters that could accept animals to be adopted</div>
                                    <div>As a Client, User could create new User profile such as name, phone number, and email. User could also adopt available animals</div>
                                </p>
                                <p>
                                    <li><b>Sweet Shop:</b> an Object-Oriented Program written in C++ using GTKMM library</li>
                                    <div>User can manage inventory and orders of the shop</div>
                                    <div>User may add additional shops</div>
                                </p>
                            </ul>
                        </div>
                    </Card>
                    <hr></hr>
                    <Card>
                        <h5>Work Experience</h5>
                        <div>
                            <ul>
                                <p>
                                    <li><b>Web Developer: </b><small align="right">August 2019 - present</small></li>
                                    <div><i>Ly Agency - Arlingtion, TX</i></div>
                                    <div>•	Design and Maintain an insurance agency website <a href="http://www.lyagency.com">www.lyagency.com</a> and  <a href="http://www.obamacaregarden.com">www.obamacaregarden.com</a></div>
                                    <div>•	Developed a mass texting program that is integrated with Twillio</div>
                                </p>
                                <p>
                                    <li><b>Trainer: </b><small align="right">Febuary 2018 - March 2020</small></li>
                                    <div><i>Duc Chuong - Arlington, TX</i></div>
                                    <div>•	Interviewed, trained, and supported new servers</div>
                                    <div>•	Communicated with other staffs and customers to provide quality customer service in fast-paced environment</div>
                                </p>
                                <p>
                                    <li><b>Computer Sale Associate: </b><small align="right">August 2015 - April 2016</small></li>
                                    <div><i>Fry's Electronics - Arlington, TX</i></div>
                                    <div>•	Exceeded monthly sales quotas for computers/tablets/etc.</div>
                                    <div>•	Delivered excellent customer service with floor sales and assisted customers with purchases</div>
                                </p>
                            </ul>
                        </div>
                    </Card>
                    <hr></hr>
                    <Card>
                        <h5>Activities and Organization</h5>
                        <div>
                            <p>
                                <ul>
                                    <li><b>President: </b><small>Fall 2013 - Spring 2014</small></li>
                                    <div><i>Engineering Club President - Arlington High School, Arlington, TX</i></div>
                                    <div>•	Organized and executed club’s events such as competition, fundraiser, meetings, and game nights</div>
                                    <div>•	Managed club’s fund and equipment</div>
                                </ul>
                            </p>
                        </div>
                    </Card>
                    <hr/>
                </div>
                
                
            </div>
        </div>

    )
}

export default Resume