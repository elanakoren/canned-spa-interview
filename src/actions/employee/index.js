import { fetch } from '../../api';

module.exports = {
  getAll() {
    return (dispatch) => {
      fetch('/api/employees').then((response) => {
        return dispatch({
          type: 'GET_EMPLOYEES',
          employees: response
        })
      })
    }
  },

  createEmployee(employeeData) {
    return () => {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(employeeData)
      };
      console.log('right before return');
      return fetch('/api/employees/new', options)
    }
  }
};