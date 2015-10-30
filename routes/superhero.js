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
function findById(req, res, next) {
  Superhero.findById(req.params.id, (err, superhero) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    if (superhero === null) {
      res.status(404);
      return next();
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
function findAll(req, res, next) {
  Superhero.find((err, superheroes) => {
    if (err) {
      res.status(500)
      return next(err);
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
function create(req, res, next) {
  var superhero = new Superhero();
  superhero.name = req.body.name;
  superhero.universe = req.body.universe;

  superhero.save(err => {
    if (err) {
      res.status(500)
      return next(err);
    }
    res.status(201)
      .location('/superheroes/' + superhero.id)
      .send();
  })
}

/**
 * @api {delete} /superheroes Delete an existing superhero
 * @apiName DeleteSuperhero
 * @apiGroup Superhero
 *
 * @apiParam {Number} id ID of superhero to be deleted
 *
 * @apiSuccess {Object} created superhero
 */
function remove(req, res, next) {
  Superhero.findByIdAndRemove(req.params.id, (err) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    res.status(200)
      .send();
  })
}

var routes = express.Router();

routes.route('/superheroes')
  .post(create)
  .get(findAll);

routes.route('/superheroes/:id')
  .get(findById)
  .delete(remove);

module.exports = routes;

