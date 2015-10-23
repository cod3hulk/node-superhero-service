var express = require('express');
var bodyParser = require('body-parser');
var superheroRoutes = require('./routes/superhero.js');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(superheroRoutes);

module.exports = app;

