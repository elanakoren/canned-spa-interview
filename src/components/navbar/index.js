import React from 'react';
import { Link } from 'react-router';

import Navbar from 'react-bootstrap/lib/Navbar';

export default class SpaNavBar extends React.Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Standup</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <ul className="nav navbar-nav">
          <li><Link to="/employees">Employees</Link></li>
          <li><Link to="/standups">Standups</Link></li>
        </ul>
      </Navbar>
    )
  }
}
