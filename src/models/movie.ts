import mongoose, {Schema} from 'mongoose';

const Movie = new Schema({
  director: String,
  title: String,
  genre: String,
  releaseDate: Date,
});


const MovieModel = mongoose.model('Movie', Movie);

export default MovieModel
