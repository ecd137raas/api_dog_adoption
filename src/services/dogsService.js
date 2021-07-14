const dogsData = require('../data/dogsData')
const axios = require('axios')

exports.getDogs = function () {
  return dogsData.getDogs()
}

exports.getDog = function (id) {
  return dogsData.getDog(id)
}

exports.saveDog = async function (dog) {
  const img = await getImg(dog.breeds)
  dog.photo = img.data.message
  return dogsData.saveDog(dog)
}

exports.updateDog = function (id, data) {
  return dogsData.updateDog(id, data)
}

exports.deleteDog = function (id) {
  return dogsData.deleteDog(id)
}

function getImg (breeds) {
  const breedsLowerCase = breeds.toLowerCase()
  try {
    return axios.get(`https://dog.ceo/api/breed/${breedsLowerCase}/images/random`)
  } catch (error) {
    console.error(error)
  }
}
