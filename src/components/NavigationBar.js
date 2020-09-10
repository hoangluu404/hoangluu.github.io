import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { render } from '@testing-library/react';
import {Link} from 'react-router-dom';
import Projects from '../pages/resume';

const NavigationBar = () =>{
    return(
        <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" className="NavBar" style={{boxShadow: "0px 5px 10px 2px rgba(0,0,0,0.25)"}}>
        <Navbar.Brand href="#/">Hoang Luu</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#/">Projects</Nav.Link>
            <Nav.Link href="#/resume">Resume</Nav.Link>
            <Nav.Link href="#/contacts">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#/contacts">HoangLuu404@gmail.com</Nav.Link>
            <Nav.Link>(817) 987 3276</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )

}

export default NavigationBar