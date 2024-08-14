const express = require('express')
const mongoose = require('mongoose')
const movieRoutes = require('./routes/movieRoutes')

const dbName = 'moviesDB'
const uri = `mongodb://localhost:27017/${dbName}`;

const port = 9000
const app = express()

app.use(express.json())
app.use('/movies', movieRoutes)


app.listen(port, ()=> {
    mongoose.connect(uri).then(() => console.log('Connected! to mongo'));
    console.log(`Server started on ${port}`)
})