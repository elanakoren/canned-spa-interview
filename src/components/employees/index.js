import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import employeeActions from '../../actions/employee';

import style from './style.scss';

class Employees extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showInactive: false
    }
  }

  componentDidMount() {
    this.props.dispatch(employeeActions.getAll());
  }

  render() {
    return (
      <div className={style.container}>
        <h1>Employees</h1>
        <p><Link className="btn btn-primary" to="/employees/new">Add a New Employee</Link></p>
        <p><a onClick={() => {this.setState({showInactive: !this.state.showInactive})}}>
          Show Inactive Employees
        </a></p>
        <ul>
          {
            Object.keys(this.props.employees).map((employeeId, key) => {
              if (!this.state.showInactive && this.props.employees[employeeId].active) {
                return (
                  <li key={key}>
                    {this.props.employees[employeeId].name}
                    <a className={style.inactive} onClick={() => {
                    }}>Make Inactive</a>
                  </li>
                )
              }
            })
          }
        </ul>
      </div>
    )
  }
}

Employees.propTypes = {
  employees: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    employees: state.employees
  }
};

export default connect(mapStateToProps)(Employees);