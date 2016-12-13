require('es6-promise').polyfill();
require('isomorphic-fetch');

module.exports = {
  fetch(url, options) {
    return fetch(url, options)
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
  }
};