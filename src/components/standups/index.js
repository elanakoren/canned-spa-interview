import React from 'react';
import {Link} from 'react-router';

export default class StandupsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Standups</h1>
        <p><Link to="/standups/new" className="btn btn-primary">Add a New Standup</Link></p>
      </div>
    )
  }
}