import React from 'react' ;
import { Nav, Navbar, Button } from 'react-bootstrap' ;
import logo from '../logo.png';
import './Navigation.css'
import { LinkContainer } from "react-router-bootstrap";


export default function Navigation() {
    return (
      <div>
        <Navbar variant='dark' fluid collapseOnSelect inverse='true' className='navbar'>
          <Navbar.Brand href="/" className='navbar-brand'>
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            AppEase
          </Navbar.Brand>

          <Navbar.Toggle />

          <Navbar.Collapse>
            <Nav className='ml-auto'>
              <LinkContainer to="/signup">
                <Button variant='dark' className='but'>Signup</Button>
              </LinkContainer>
              
              <LinkContainer to="/login">
                <Button variant='dark'>Login</Button>
              </LinkContainer>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
}