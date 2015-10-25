var mongoose = require('mongoose');
var app = require('./app.js');

mongoose.connect('mongodb://192.168.59.103:32768/superhero');

var port = process.env.PORT || 3000
var server = app.listen(port, err => {
  if (err) {
    console.err(err);
  }
  console.log('Listening to: ' + 'http://localhost:3000');
});

