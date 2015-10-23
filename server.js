var app = require('./app.js');

var port = process.env.PORT || 3000
global.host = 'http://localhost';
global.port = port;
global.url = global.host + ':' + global.port;

var server = app.listen(port, err => {
  if (err) {
    console.err(err);
  }
  console.log('Listening to: ' + global.url);
});

