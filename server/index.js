if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({path: './.testenv'});
} else {
  require('dotenv').config({path: './.env'});
}

const db = require('./helpers/db-connect');
var dbHelpers = require('./helpers/db-helpers')(db);

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(__dirname + '/src/static'));
app.set('views',__dirname + '/src/static');

app.get('/api/employees', function(req, res) {
  dbHelpers.getActiveEmployees().then( function(data) {
    res.send(data);
  });
});

app.post('/api/employees/new', function(req, res) {
  dbHelpers.createEmployee(req.body)
    .then(function () {
      res.status(201).end();
    });
});

app.put('/api/employees/:id/inactive', function (req, res) {
  db.none("update employees set active=$1 where id=$2", [false, parseInt(req.params.id, 10)])
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