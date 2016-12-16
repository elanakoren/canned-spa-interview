import { fetch } from '../../api';

module.exports = {
  getAll() {
    return (dispatch) => {
      fetch('/api/standups').then((response) => {
        return dispatch({
          type: 'GET_STANDUPS',
          standups: response
        })
      })
    }
  },

  createStandup(date) {
    return () => {
      return fetch('/api/standups/new', {
        headers: {
          contentType: 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({date})})
    }
  }
};