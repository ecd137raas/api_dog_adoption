const express = require('express')
const router = express.Router()

const dogsServices = require('../services/dogsService')

router.get('/dogs', async function (req, res) {
  const data = await dogsServices.getDogs()
  res.json(data)
})

router.get('/dog/:id', async function (req, res) {
  const data = await dogsServices.getDog(req.params.id)
  res.json(data)
})

router.post('/dogs', async function (req, res) {
  const body = req.body
  const data = await dogsServices.saveDog(body)
  res.json(data)
})

router.put('/dog/:id', async function (req, res) {
  const body = req.body
  await dogsServices.updateDog(req.params.id, body)
  res.end()
})

router.delete('/dog/:id', async function (req, res) {
  await dogsServices.deleteDog(req.params.id)
  res.end()
})

module.exports = router
