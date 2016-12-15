var api = require('express')();
var employees = require('./employees');

api.use('/employees', employees);

module.exports = api;