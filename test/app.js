var request = require('supertest');
var mongoose = require('mongoose');
var mockgoose = require('mockgoose');
var should = require('should');

mockgoose(mongoose);
var app = require('../src/app.js');

describe('Superhero service', function () {
    describe('POST /superheroes', function () {
        it('should create a superhero', function (done) {
            request(app)
                .post('/superheroes')
                .send({ name: "Spiderman", universe: "Marvel" })
                .expect(201)
                .end(function(err, res) {
                    done();
                }); 
        });
    });
    describe('GET /superheroes', function () {
        it('should return all superheroes', function (done) {
            request(app)
                .get('/superheroes')
                .expect(200)
                .end(function(err, res) {
                    res.body.should.have.length(1);
                    done();
                }); 
        });
    });
});

