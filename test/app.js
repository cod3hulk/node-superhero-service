var request = require('supertest');
var assert = require('assert');
var app = require('../src/app.js');

describe('Superhero service', function () {
  describe('GET /superheroes', function () {
    it('should return all superheroes', function (done) {
      request(app)
        .get('/superheroes')
        .expect(200)
        .end(function(err, res) {
          console.log(res);
          done();
        }); 
    });
  });
});

