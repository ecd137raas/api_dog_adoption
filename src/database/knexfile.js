require('dotenv').config()

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
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
