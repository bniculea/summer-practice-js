const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Movie = new Schema({
  director: String,
  title: String,
  genre: String,
  releaseDate: Date,
});


const MovieModel = mongoose.model('Movie', Movie);

module.exports = MovieModel
