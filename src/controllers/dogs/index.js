const connection = require('../../database/connection')
const msg = require('../../constants')
const dogImage = require('../../services')

module.exports = {
  async index (req, res) {
    const result = await connection.select('*').from('dogs_adoption')
    res.status(200).json(result)
  },
  async indexById (req, res) {
    const id = req.params.id
    // #app.swagger.parameters.['id'] = { description: 'ID do usuário.' }
    const result = await connection('dogs_adoption').where({ id }).select('*')
    if (result.length !== 0) {
      res.status(200).json(result)
      return
    }
    res.sendStatus(404)
  },
  async create (req, res) {
    const { name, age, breeds, characteristics, health, gender, size, primary_color: primaryColor, id_dog_adoption_center: idAdoptionCenter } = req.body
    const photo = await dogImage(breeds)
    try {
      await connection('dogs_adoption').insert({
        name,
        age,
        characteristics,
        health,
        gender,
        size,
        primary_color: primaryColor,
        photo: photo.data.message,
        id_dog_adoption_center: idAdoptionCenter,
        breeds
      })
      res.status(201).json({ sucess: msg.success })
    } catch (err) {
      res.status(400).json({ erro: err })
    }
  },
  async update (req, res) {
    const id = req.params.id
    const { name, type, age, characteristics, health, gender, size, primary_color: primaryColor } = req.body
    try {
      await connection('dogs_adoption').where('id', id).update({
        name,
        type,
        age,
        characteristics,
        health,
        gender,
        size,
        primary_color: primaryColor
      })
      res.status(200).json({ sucess: msg.success })
    } catch (err) {
      res.status(400).json({ erro: err })
    }
  },
  async delete (req, res) {
    const id = req.params.id
    try {
      await connection('dogs_adoption').where('id', id).del()
      res.status(200).json({ sucess: msg.success })
    } catch (err) {
      res.status(400).json({ erro: err })
    }
  }
}
