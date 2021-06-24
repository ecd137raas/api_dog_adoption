const swaggerAutogen = require('swagger-autogen')()

const outputFile = './src/swagger_output.json'
const endpointsFiles = ['./src/routes/index.js']

swaggerAutogen(outputFile, endpointsFiles)
