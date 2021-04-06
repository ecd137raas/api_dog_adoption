
exports.up = function(knex) {
    return knex.schema.createTable("centro_adocao", function(table) {
        table.increments();
        table.string("nome", 100).notNullable();
        table.string("endereco", 100).notNullable();
        table.string("cidade", 50).notNullable();
        table.string("uf", 2).notNullable();
    });
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("centro_adocao");
} 