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
      return fetch('/api/employees/new', options)
    }
  },

  makeInactive(employeeId) {
    return () => {
      const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        }
      };
      return fetch(`/api/employees/${employeeId}/inactive`, options)
    }
  }
};