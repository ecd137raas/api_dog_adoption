const axios = require('axios')

module.exports = async (breeds) => {
  const breedsLowerCase = breeds.toLowerCase()
  try {
    return await axios.get(`https://dog.ceo/api/breed/${breedsLowerCase}/images/random`)
  } catch (error) {
    console.error(error)
  }
}
