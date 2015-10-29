var express = require('express');
var Superhero = require('../models/superhero.js');

/**
 * @api {get} /superheroes/:id Request superhero information
 * @apiName GetSuperhero
 * @apiGroup Superhero
 *
 * @apiParam {Number} id superheroes unique id
 *
 * @apiSuccess {Object} requested superhero
 */
function findById(req, res) {
  Superhero.findById(req.params.id, (err, superhero) => {
    if (err) {
      res.status(500)
        .send(err);
      return;
    }
    if (superhero === null) {
      res.status(404)
        .send();
      return;
    }
    res.status(200)
      .json(superhero);
  })
}

/**
 * @api {get} /superheroes/ Request all superheros
 * @apiName GetAllSuperheros
 * @apiGroup Superhero
 *
 * @apiSuccess {Object} all requested superheros
 */
function findAll(req, res) {
  Superhero.find((err, superheroes) => {
    if (err) {
      res.status(500)
        .send(err);
      return;
    }
    res.status(200)
      .json(superheroes);
  });
}

/**
 * @api {post} /superheroes Create a new superhero
 * @apiName CreateSuperhero
 * @apiGroup Superhero
 *
 * @apiParam {String} name Name of the superhero
 * @apiParam {String} universe Universe of the superhero
 *
 * @apiSuccess {Object} created superhero
 */
function create(req, res) {
  var superhero = new Superhero();
  superhero.name = req.body.name;
  superhero.universe = req.body.universe;

  superhero.save(err => {
    if (err) {
      res.status(500)
        .send(err);
      return;
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

