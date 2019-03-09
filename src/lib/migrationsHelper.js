const defineColumnType = (isTypeBigInt, table, columnName) => isTypeBigInt ? table.bigInteger(columnName) : table.integer(columnName);

const checkUnique = (isUnique, column) => isUnique ? column.unique() : column;

const checkDefault = (value, column) => value ? column.defaultTo(value) : column;

const relationsGenerator = (columnName, nameOfForeignTable, table, options = {}) => {
    const { isTypeBigInt = false, isUnique = false, defaultValue = false } = options;

    const column = defineColumnType(isTypeBigInt, table, columnName);
    checkUnique(isUnique, column);
    checkDefault(defaultValue, column);
    column.notNullable().unsigned();

    table.foreign(columnName).references('id').inTable(nameOfForeignTable);
};

const baseMethods = (table, knex) => {
    table.dateTime('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
    table.dateTime('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    relationsGenerator('status_id', 'status', table, { defaultValue: 1 });
};

const commonTables = (table, knex) => {
    table.increments();
    table.string('code').notNullable().unique();
    table.string('label').notNullable().unique();
    table.text('description');
    baseMethods(table, knex);
};

module.exports = {
    baseMethods,
    relationsGenerator,
    commonTables
};
