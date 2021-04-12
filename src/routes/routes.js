const express = require('express')
const petsController = require('../controllers/petsController')

const router = express.Router()

router.get('/pets', petsController.index)
router.get('/pets/:id', petsController.showById)
router.post('/pets', petsController.create)
router.put('/pets/:id', petsController.update)
router.delete('/pets/:id', petsController.delete)

module.exports = router
