const axios = require('axios')

module.exports = async (raca) => {
  const racaLowerCase = raca.toLowerCase()
  try {
    return await axios.get(`https://dog.ceo/api/breed/${racaLowerCase}/images/random`)
  } catch (error) {
    console.error(error)
  }
}
