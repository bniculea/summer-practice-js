import express from 'express'
const router = express.Router()
import MovieModel from '../models/movie'
import mongoose from 'mongoose'
router.get('/', async (req, res) => {
    const movies = await MovieModel.find()
    res.status(200).send(movies)
  })
  
  router.post('/', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
      try {
      const movie = new MovieModel(req.body)
      const result = await movie.save()
      res.status(201).send(result)
      } catch(err){
        next(err)
      }
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
      if (err instanceof mongoose.Error.CastError){
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
      if (err instanceof mongoose.Error.CastError){
        res.status(204).send()
      }
    }
  })

  router.patch('/', (req, res)=> {
      res.status(405).send()
  })

  export default router