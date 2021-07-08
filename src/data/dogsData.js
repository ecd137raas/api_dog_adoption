const database = require('../infra/database')

exports.getDogs = function () {
  return database.query('select * from dogs_adoption')
}

exports.getDog = function (id) {
  return database.oneOrNone(`select * from dogs_adoption where id = ${id}`)
}

exports.saveDog = function (data) {
  return database.one('insert into dogs_adoption (name, age, characteristics, health, gender, size, primary_color, photo, id_dog_adoption_center, breeds) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) returning * ', [data.name, data.age, data.characteristics, data.health, data.gender, data.size, data.primary_color, data.photo, data.id_dog_adoption_center, data.breeds])
}

exports.updateDog = function (id, data) {
  return database.none('update dogs_adoption set name = $1, primary_color = $2 where id = $3', [data.name, data.primary_color, id])
}

exports.deleteDog = function (id) {
  return database.none(`delete from dogs_adoption where id = ${id}`)
}
