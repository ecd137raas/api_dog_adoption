const express = require('express')

const app = express()

app.use(express.json())
app.use('/', require('../src/route/dogsRoute'))

module.exports = app
