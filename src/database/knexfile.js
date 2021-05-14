const db = require('../config')

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: db.host,
      database: db.database,
      user: db.user,
      password: db.password
    },
    pool: {
      min: 2,
      max: 10
    }
  }
}
