import React from 'react';

import style from './style.scss';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

export default class SpaNavBar extends React.Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Standup</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">Employees</NavItem>
          <NavItem eventKey={2} href="#">Standups</NavItem>
        </Nav>
      </Navbar>
    )
  }
}
