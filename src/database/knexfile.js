const db = require('../config/config')

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: db.host,
      database: db.database,
      user: db.user,
      password: db.password,
      migrations: {
        directory: './database/migrations'
      }
    },
    pool: {
      min: 2,
      max: 10
    }
  }
}
