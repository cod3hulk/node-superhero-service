var express = require('express');
var Superhero = require('../models/superhero.js');

function findById(req, res) {
  Superhero.findById(req.params.id, (err, superhero) => {
    if (err) {
      res.status(500)
        .send(err);
    }
    res.status(200)
      .json(superhero);
  })
}

function findAll(req, res) {
  Superhero.find((err, superheroes) => {
    if (err) {
      res.status(500)
        .send(err);
    }
    res.status(200)
      .json(superheroes);
  });
}

function create(req, res) {
  var superhero = new Superhero();
  superhero.name = req.body.name;
  superhero.universe = req.body.universe;

  superhero.save(err => {
    if (err) {
      res.status(500)
        .send(err);
    }
    res.status(201)
      .json({ message: 'Superhero added', data: superhero });
  })

}

var routes = express.Router();
routes.route('/superheroes')
  .post(create)
  .get(findAll);
routes.route('/superheroes/:id')
  .get(findById);

module.exports = routes;

