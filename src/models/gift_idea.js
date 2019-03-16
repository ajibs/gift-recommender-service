const bookshelf = require('bookshelf_config');

const GiftIdea = bookshelf.Model.extend({
    tableName: 'gift_idea'
});

module.exports = GiftIdea;
