const express = require("express")
const CarsRouter = require('./cars/cars-router')

const server = express()

server.use(express.json())

server.use('/api/cars', CarsRouter)

server.use('*', (req,res,next) => {
  next({ status: 404, message: 'not found'})
})

server.use((err, req, res, next)=>{ //eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: 'potential stack'
  })
})

module.exports = server