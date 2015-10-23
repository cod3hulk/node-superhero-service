var express = require('express');

function findAll(req, res) {
  res.json({
    message: 'findAll'
  });
}

function create(req, res) {
  var superhero = new Object();
  superhero.name = req.body.name;
  superhero.universe = req.body.universe;

  res.status(201)
    .location(global.url + '/superheros/' + '42')
    .json(superhero);
}

var routes = express.Router();
routes.route('/superheroes')
  .post(create)
  .get(findAll);

module.exports = routes;

