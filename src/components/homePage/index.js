import React from 'react';
import { Link } from 'react-router';

import style from './style.scss';

export default class HomePage extends React.Component {
  render() {
    return (
      <div className={style.container}>
        <p>
          <Link to="/employees">View Employees</Link>
        </p>
        <p>
          <Link to="/standups">View Standups</Link>
        </p>
      </div>
    );
  }
}