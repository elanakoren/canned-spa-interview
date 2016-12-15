import { fetch } from '../../api';

module.exports = {
  getAll() {
    return (dispatch) => {
      fetch('/api/standups').then((response) => {
        return dispatch({
          type: 'GET_STANDUPS',
          employees: response
        })
      })
    }
  }
};