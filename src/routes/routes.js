const express = require('express')
const petsController = require('../api/controllers/petsController')

const router = express.Router()

router.get('/pets', petsController.index)
router.get('/pets/:id', petsController.indexById)
router.post('/pets', petsController.create)
router.put('/pets/:id', petsController.update)
router.delete('/pets/:id', petsController.delete)

module.exports = router
