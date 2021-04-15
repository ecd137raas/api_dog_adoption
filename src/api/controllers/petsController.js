const connection = require('../../database/connection')
const msg = require('../../constants/petsConstants')
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
    const { tipo, nome, idade, raca, idcentroadocao: idCentroAdocao } = req.body
    const foto = await dogImage(raca)
    try {
      await connection('pets').insert({ tipo, nome, idade, raca, foto: foto.data.message, idcentroadocao: idCentroAdocao })
      res.status(201).json({ sucesso: msg.success })
    } catch (err) {
      res.status(400).json({ erro: err })
    }
  },
  async update (req, res) {
    const id = req.params.id
    const { tipo, nome, idade } = req.body
    try {
      await connection('pets').where('id', id).update({ tipo, nome, idade })
      res.status(200).json({ sucesso: msg.success })
    } catch (err) {
      res.status(400).json({ erro: err })
    }
  },
  async delete (req, res) {
    const id = req.params.id
    try {
      await connection('pets').where('id', id).del()
      res.status(200).json({ sucesso: msg.success })
    } catch (err) {
      res.status(400).json({ erro: err })
    }
  }
}
