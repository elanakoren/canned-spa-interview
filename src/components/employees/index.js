import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import employeeActions from '../../actions/employee';
import EmployeeItem from './employee_item';

import style from './style.scss';

export class Employees extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showInactive: false
    }
  }

  componentDidMount() {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.props.dispatch(employeeActions.getAll());
  }

  makeInactive(id) {
    return () => {
      this.props.dispatch(employeeActions.makeInactive(id)).then(() => {
        this.getAllEmployees();
      });
    }
  }

  makeActive(id) {
    return () => {
      this.props.dispatch(employeeActions.makeActive(id)).then(() => {
        this.getAllEmployees();
      });
    }
  }

  render() {
    const {employees} = this.props;
    const {showInactive} = this.state;
    return (
      <div className={style.container}>
        <h1>Employees</h1>
        <p><Link className="btn btn-primary" to="/employees/new">Add a New Employee</Link></p>
        <p><a className={`toggle-active ${style.link}`} onClick={() => {
          this.setState({showInactive: !showInactive})
        }}>
          {showInactive ? 'Hide' : 'Show' } Inactive Employees
        </a></p>
        <ul>
          {
            Object.keys(employees).map((employeeId, key) => {
              const employee = employees[employeeId];
              if (employee.active) {
                return (
                  <EmployeeItem
                    key={key}
                    employee={employee}
                    text='Make Inactive'
                    onClick={this.makeInactive(employee.id)} />
                )
              } else if (showInactive && !employee.active) {
                return (
                  <EmployeeItem
                    key={key}
                    employee={employee}
                    text='Make Active'
                    onClick={this.makeActive(employee.id)} />
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