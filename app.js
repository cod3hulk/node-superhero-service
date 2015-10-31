var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var superheroRoutes = require('./routes/superhero.js');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(superheroRoutes);

mongoose.connect('mongodb://192.168.59.103:32768/superhero');

var port = process.env.PORT || 3000
var server = app.listen(port, err => {
  if (err) {
    console.err(err);
  }
  console.log('Listening to: ' + 'http://localhost:3000');
});

