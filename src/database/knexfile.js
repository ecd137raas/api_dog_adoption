// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host:'localhost',
      database: 'adocao_pets',
      user:     'usr_pg',
      password: 'usr_pg',
      migrations: {
        directory: './database/migrations',
      }
    },
    pool: {
      min: 2,
      max: 10
    }
  }
}

