const express = require('express')
const dogs = require('../controllers')

const route = express.Router()

route.get('/dogs', dogs.index)
route.get('/dog/:id', dogs.indexById)
route.post('/dog', dogs.create)
route.put('/dog/:id', dogs.update)
route.delete('/dog/:id', dogs.delete)

module.exports = route
