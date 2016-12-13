import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import employeeActions from '../../actions/employee';

import style from './style.scss';

class Employees extends React.Component {

  componentDidMount() {
    this.props.dispatch(employeeActions.getAll());
  }

  render() {
    return (
      <div className={style.container}>
        <h1>Employees</h1>
        <p><Link className="btn btn-primary" to="/employees/new">Add a New Employee</Link></p>
        <p><a onClick={() => {}}>Show Inactive Employees</a></p>
        <ul>
          {
            Object.keys(this.props.employees).map((employeeId, key) => {
              return (
                <li key={key}>
                  {this.props.employees[employeeId].name}
                  <a className={style.inactive} onClick={() => {}}>Make Inactive</a>
                </li>
              )
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