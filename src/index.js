const express = require('express')
const mongoose = require('mongoose');
const MovieModel = require('./models/movie')

const dbName = 'moviesDB'
const uri = `mongodb://localhost:27017/${dbName}`;

const port = 9000
const app = express()

// app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())

app.get('/movies', async (req, res) => {
  const movies = await MovieModel.find()
  res.status(200).send(movies)
})

app.post('/movies', (req, res) => {
    const movie = new MovieModel(req.body)
    movie.save()
    res.status(201)
})

app.patch('/movies', (req, res)=> {
    res.status(405).send()
})

app.listen(port, ()=> {
    mongoose.connect(uri).then(() => console.log('Connected! to mongo'));
    console.log(`Server started on ${port}`)
})