const bookshelf = require('bookshelf_config');
const constants = require('src/config/constants');

const GiftIdea = bookshelf.Model.extend({
    tableName: 'gift_idea',

    fetchAllGiftIdeas: function () {
        return this.where({ status_id: constants.status.ACTIVE })
            .fetchAll({ require: true })
            .then(res => res.toJSON())
            .catch(error => {
                throw error;
            });
    },

    createGiftSuggestion: function (giftSuggestion) {
        return this.save(giftSuggestion)
            .then(res => res.toJSON())
            .catch(error => {
                throw error;
            });
    }
});

module.exports = GiftIdea;
