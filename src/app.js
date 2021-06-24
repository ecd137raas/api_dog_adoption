const express = require('express')
const swaggerUi = require('swagger-ui-express')

const router = require('./routes')
const swaggerFile = require('./swagger_output.json')
const app = express()

app.use(express.json())
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(router)

module.exports = app
