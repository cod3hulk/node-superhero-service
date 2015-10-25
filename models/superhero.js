var mongoose = require('mongoose');

var SuperheroSchema = new mongoose.Schema({
  name: String,
  universe: String
});

module.exports = mongoose.model('Superhero', SuperheroSchema);

