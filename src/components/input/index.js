import React from 'react';

export default class Input extends React.Component {
  render() {
    const {label, ...props} = this.props;
    return (
      <div>
        <label>{label}</label>
        <input {...props}/>
      </div>
    );
  }
}

Input.propTypes = {
  label: React.PropTypes.string.isRequired
};