if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({path: './.testenv'});
} else {
  require('dotenv').config({path: './.env'});
}

var db = require('./helpers/db-connect');
var dbHelpers = require('./helpers/db-helpers')(db);

var express = require('express');
var app = express();

var path = require('path');

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, '../src/static')));
app.set('views',path.join(__dirname, '../src/static'));

app.get('/api/employees', function(req, res) {
  dbHelpers.getEmployees().then( function(data) {
    res.send(data);
  });
});

app.post('/api/employees/new', function(req, res) {
  dbHelpers.createEmployee(req.body)
    .then(function (data) {
      res.status(201);
      res.send(data);
    });
});

app.put('/api/employees/:id/active/:active', function (req, res) {
  db.none("update employees set active=$1 where id=$2", [req.params.active === 'true', parseInt(req.params.id, 10)])
    .then(function () {
      res.status(204).end();
    });
});

app.get('*', function (req, res) {
  res.render('index.html')
});

var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('App listening on port ' + port);
});