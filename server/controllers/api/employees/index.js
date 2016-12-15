var employees = require('express')();

var db = require('../../../helpers/db-connect');
var Employee = require('../../../models/employee');

employees.get('/', function(req, res) {
  Employee.findAll().then( function(employees) {
    res.send(employees);
  });
});

employees.post('/new', function(req, res) {
  Employee.create(req.body)
    .then(function (employee) {
      res.status(201);
      res.send(employee);
    });
});

employees.put('/:id/active/:active', function (req, res) {
  Employee.update(
    {active: req.params.active === 'true'},
    {
      where: {
        id: parseInt(req.params.id, 10)
    }
  }).then(function () {
      res.status(204).end();
    });
});

module.exports = employees;