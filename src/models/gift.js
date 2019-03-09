const bookshelf = require('bookshelf_config');

const Gift = bookshelf.Model.extend({
    tableName: 'gift'
});

module.exports = Gift;
