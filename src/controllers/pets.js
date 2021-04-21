const connection = require('../database/connection')
const msg = require('../constants/pets')
const dogImage = require('../services/dogApi')

module.exports = {
  async index (req, res) {
    const pets = await connection.select('*').from('pets')
    res.status(200).json(pets)
  },
  async indexById (req, res) {
    const id = req.params.id
    const pets = await connection('pets').where({ id }).select('*')
    if (pets.length !== 0) {
      res.status(200).json(pets)
      return
    }
    res.sendStatus(404)
  },
  async create (req, res) {
    const { name, type, age, breeds, idadoptioncenter: idAdoptionCenter } = req.body
    const photo = await dogImage(breeds)
    try {
      await connection('pets').insert({ name, type, age, breeds, photo: photo.data.message, idadoptioncenter: idAdoptionCenter })
      res.status(201).json({ sucess: msg.success })
    } catch (err) {
      res.status(400).json({ erro: err })
    }
  },
  async update (req, res) {
    const id = req.params.id
    const { name, type, age } = req.body
    try {
      await connection('pets').where('id', id).update({ name, type, age })
      res.status(200).json({ sucess: msg.success })
    } catch (err) {
      res.status(400).json({ erro: err })
    }
  },
  async delete (req, res) {
    const id = req.params.id
    try {
      await connection('pets').where('id', id).del()
      res.status(200).json({ sucess: msg.success })
    } catch (err) {
      res.status(400).json({ erro: err })
    }
  }
}
