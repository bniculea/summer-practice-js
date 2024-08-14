const express = require('express')
const router = express.Router()
const MovieModel = require('../models/movie')

router.get('/', async (req, res) => {
    const movies = await MovieModel.find()
    res.status(200).send(movies)
  })
  
  router.post('/', async (req, res) => {
      const movie = new MovieModel(req.body)
      await movie.save()
      res.status(201)
  })
  
  router.patch('/', (req, res)=> {
      res.status(405).send()
  })

module.exports = router