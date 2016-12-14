import React from 'react';

import style from './style.scss';

export default class EmployeeItem extends React.Component {
  render() {
    const {employee, onClick, text} = this.props;
    return (
      <li>
        {employee.name}
        <a className={style.link} onClick={onClick}>{text}</a>
      </li>
    )
  }
}

EmployeeItem.propTypes = {
  employee: React.PropTypes.object.isRequired,
  onClick: React.PropTypes.func,
  text: React.PropTypes.string.isRequired
};