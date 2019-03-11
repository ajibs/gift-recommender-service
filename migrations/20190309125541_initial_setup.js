const { relationsGenerator, baseMethods, commonTables } = require('src/lib/migrationsHelper');

exports.up = function (knex) {
    return knex.schema.createTable('status', (table) => {
        table.increments();
        table.string('code').notNullable().unique();
        table.string('label').notNullable().unique();
        table.timestamp('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
        // table.timestamp('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    }).then(() => knex.schema.createTable('gender', (table) => {
        commonTables(table, knex);
    })).then(() => knex.schema.createTable('interest', (table) => {
        commonTables(table, knex);
    })).then(() => knex.schema.createTable('age', (table) => {
        commonTables(table, knex);
        table.integer('min').notNullable();
        table.integer('max').notNullable();
    })).then(() => knex.schema.createTable('budget', (table) => {
        commonTables(table, knex);
        table.integer('min').notNullable();
        table.integer('max').notNullable();
    })).then(() => knex.schema.createTable('gift_idea', (table) => {
        commonTables(table, knex);
    })).then(() => knex.schema.createTable('gift', (table) => {
        table.increments();
        table.string('product_link').notNullable().unique();
        table.string('title').notNullable();
        table.integer('price').notNullable();
        table.string('image_url').notNullable().defaultTo('https://upload.wikimedia.org/wikipedia/commons/b/b7/Big_smile.png');
        relationsGenerator('gift_idea_id', 'gift_idea', table);
        baseMethods(table, knex);
    })).then(() => knex.schema.createTable('gift_selection', (table) => {
        relationsGenerator('gift_id', 'gift', table);
        relationsGenerator('gender_id', 'gender', table);
        relationsGenerator('age_id', 'age', table);
        relationsGenerator('interest_id', 'interest', table);
        relationsGenerator('budget_id', 'budget', table);
        table.primary(['budget_id', 'age_id', 'gender_id', 'interest_id']);
    }));
};

exports.down = function (knex) {
    return knex.schema.dropTable('gift_selection')
        .then(() => knex.schema.dropTable('gift'))
        .then(() => knex.schema.dropTable('gift_idea'))
        .then(() => knex.schema.dropTable('budget'))
        .then(() => knex.schema.dropTable('age'))
        .then(() => knex.schema.dropTable('interest'))
        .then(() => knex.schema.dropTable('gender'))
        .then(() => knex.schema.dropTable('status'));
};
