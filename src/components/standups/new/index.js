import React from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import moment from 'moment';

import standupActions from '../../../actions/standup';

require('./style.scss');

export class StandupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: moment().format('YYYY-MM-DD')
    }
  }

  updateDate = (event) => {
    this.setState({date: event.target.value})
  };

  createStandup = () => {
    this.props.dispatch(standupActions.createStandup(this.state.date)).then(() => {
      browserHistory.push('/standups');
    })
  };

  render() {
    return (
      <div className="container">
        <h1>New Standup Form</h1>
        <div className="form-widget">
          <input type="date" defaultValue={this.state.date} onChange={this.updateDate}/>
        </div>
        <div className="submit-button">
          <button type="submit" onClick={this.createStandup}>Submit</button>
        </div>
      </div>
    );
  }
}

export default connect()(StandupForm);