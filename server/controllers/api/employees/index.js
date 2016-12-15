var employees = require('express')();

var db = require('../../../helpers/db-connect');
var dbHelpers = require('../../../helpers/db-helpers')(db);

employees.get('/', function(req, res) {
  dbHelpers.getEmployees().then( function(data) {
    res.send(data);
  });
});

employees.post('/new', function(req, res) {
  dbHelpers.createEmployee(req.body)
    .then(function (data) {
      res.status(201);
      res.send(data);
    });
});

employees.put('/:id/active/:active', function (req, res) {
  db.none("update employees set active=$1 where id=$2", [req.params.active === 'true', parseInt(req.params.id, 10)])
    .then(function () {
      res.status(204).end();
    });
});

module.exports = employees;