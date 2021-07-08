const data = require('./config')
const pgp = require('pg-promise')()

const db = pgp({
  user: data.user,
  password: data.password,
  host: data.host,
  port: data.port,
  database: data.database
})

module.exports = db
