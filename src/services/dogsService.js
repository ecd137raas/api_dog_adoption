const dogsData = require('../data/dogsData')

exports.getDogs = function () {
  return dogsData.getDogs()
}

exports.getDog = function (id) {
  return dogsData.getDog(id)
}

exports.saveDog = function (dog) {
  return dogsData.saveDog(dog)
}

exports.updateDog = function (id, data) {
  return dogsData.updateDog(id, data)
}

exports.deleteDog = function (id) {
  return dogsData.deleteDog(id)
}
