var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var superheroRoutes = require('./routes/superhero.js');
var winston = require('winston');

// configure app
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(superheroRoutes);

// connect db
mongoose.connect('mongodb://192.168.59.103:32768/superhero');

// start app
var port = process.env.PORT || 3000;
app.listen(port, err => {
  if (err) {
    winston.err(err);
  }
  winston.info('Listening to: ' + 'http://localhost:3000');
});

module.exports = app;

