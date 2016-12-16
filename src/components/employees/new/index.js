import React from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import employeeActions from '../../../actions/employee';

import Input from '../../input';

import style from './style.scss';

class EmployeesForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      mobile: '',
      start_date: '',
    }
  }

  createEmployee = (e) => {
    e.preventDefault();

    const data = Object.assign({}, this.state);
    data.active = true;

    this.props.dispatch(employeeActions.createEmployee(data)).then(() => browserHistory.push('/employees'))
  };

  onChange(key) {
    return (event) => {
      this.setState({[key]: event.target.value});
    }
  }

  render() {
    return (
      <div className={style.container}>
        <h1 className={style.header}>New Employee Form</h1>
        <form onSubmit={this.createEmployee} className={style.form}>
          <Input label="Name" type="text" name="name" onChange={this.onChange('name')} />
          <Input label="Email" type="email" name="email" onChange={this.onChange('email')} />
          <Input label="Mobile" type="phone" name="mobile" onChange={this.onChange('mobile')} />
          <Input label="Start date" type="date" name="start_date" onChange={this.onChange('start_date')} />
          <button type="submit" className={style.submit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default connect()(EmployeesForm);