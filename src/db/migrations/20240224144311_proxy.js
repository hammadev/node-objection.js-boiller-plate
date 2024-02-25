/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('proxies', function (table) {
        table.bigIncrements('id').primary();
        table.string('country', 255).notNullable();
        table.string('ip', 45).notNullable();
        table.smallint('port').unsigned().notNullable();
        table.string('username', 255).notNullable();
        table.string('password', 255).notNullable();
        table.timestamp('created_at').nullable().defaultTo(knex.fn.now());
        table.timestamp('updated_at').nullable().defaultTo(knex.fn.now());
        table.timestamp('deleted_at').nullable();
        table.bigInteger('used_by').unsigned().nullable();
        // table.foreign('used_by').references('account.id').onDelete('SET NULL');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('proxy');

};
