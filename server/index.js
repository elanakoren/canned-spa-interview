if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({path: './.testenv'});
} else {
  require('dotenv').config({path: './.env'});
}

var path = require('path');
var bodyParser = require('body-parser');

var express = require('express');
var app = express();

var api = require('./controllers/api');

app.use(bodyParser.json());

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, '../src/static')));
app.set('views',path.join(__dirname, '../src/static'));

app.use('/api', api);

app.get('*', function (req, res) {
  res.render('index.html')
});

var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('App listening on port ' + port);
});