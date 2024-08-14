const express = require('express')
const router = express.Router()
const MovieModel = require('../models/movie')
const CastError = require('mongoose').CastError
router.get('/', async (req, res) => {
    const movies = await MovieModel.find()
    res.status(200).send(movies)
  })
  
  router.post('/', async (req, res) => {
      const movie = new MovieModel(req.body)
      await movie.save()
      res.status(201)
  })

  router.get('/:id', async (req, res) => {
    try {
      const id = req.params.id
    
      const movie = await MovieModel.findById(id)
      if (!movie) {
        res.status(404).send()
      } else {
        res.status(200).send(movie)
      }
    } catch (err){
      if (err instanceof CastError){
        res.status(404).send()
      }
    }
   
  })
  
  router.delete('/:id', async (req, res) => {
    try {
      const id = req.params.id
      await MovieModel.findByIdAndDelete(id)
      res.status(204).send()
    } catch (err) {
      if (err instanceof CastError){
        res.status(204).send()
      }
    }
  })

  router.patch('/', (req, res)=> {
      res.status(405).send()
  })

module.exports = router