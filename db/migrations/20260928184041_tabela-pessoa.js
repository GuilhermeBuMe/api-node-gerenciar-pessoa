/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTableIfNotExists("pessoa", tab => {
        tab.increments('id');
        tab.text('nome', 255).notNullable();
        tab.date('data_nascimento').notNullable;

        tab.unique(['nome', 'data_nascimento']);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists("pessoa");
};
