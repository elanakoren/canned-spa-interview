require('dotenv').config();

var promise = require('bluebird'); // or any other Promise/A+ compatible library;

var options = {
  promiseLib: promise // overriding the default (ES6 Promise);
};

var pgp = require('pg-promise')(options);
// See also: https://github.com/vitaly-t/pg-promise#initialization-options

// Database connection details;
var cn = {
  host: process.env.DB_HOST, // 'localhost' is the default;
  port: process.env.DB_PORT, // 5432 is the default;
  database: 'standups',
  user: process.env.DB_USER,
  password: process.env.DB_PASS
};
// You can check for all default values in:
// https://github.com/brianc/node-postgres/blob/master/lib/defaults.js

var db = pgp(cn);

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(__dirname + '/src/static'));
app.set('views',__dirname + '/src/static');

app.get('/api/employees', function(req, res) {
  db.any("select * from employees where active=$1", [true]).then( function(data) {
    res.send(data);
  });
});

app.post('/api/employees/new', function(req, res) {
  console.log(req.body);
  db.none("INSERT INTO employees VALUES(${name}, ${start_date}, ${active}, ${email}, ${mobile})", req.body)
    .then(function () {
      res.send('null');
      res.status(201).end();
    });
});

app.get('*', function (req, res) {
  res.render('index.html')
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
});