import { fetch } from '../../api';

const toggleActive = (employeeId, active) => {
  return () => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    return fetch(`/api/employees/${employeeId}/active/${active}`, options)
  }
}

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
    return toggleActive(employeeId, false)
  },

  makeActive(employeeId) {
    return toggleActive(employeeId, true)
  }
};