
exports.up = function (knex) {
  return knex.schema.createTable('pets', function (table) {
    table.increments()
    table.string('tipo', 50).notNullable()
    table.string('nome', 100).notNullable()
    table.integer('idade').notNullable()
    table.string('foto')
    table.integer('id_centro_adocao').notNullable()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('pets')
}
