import React from 'react';
import { Link } from 'react-router';

import style from './style.scss';
import Navbar from 'react-bootstrap/lib/Navbar';

export default class SpaNavBar extends React.Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Standup</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Link to="/employees">Employees</Link>
        <Link to="/standups">Standups</Link>
      </Navbar>
    )
  }
}
