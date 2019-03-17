const bookshelf = require('bookshelf_config');
const constants = require('src/config/constants');

const Gift = bookshelf.Model.extend({
    tableName: 'gift',

    fetchGiftsUnderAnIdea: function (giftIdeaId) {
        const params = { gift_idea_id: giftIdeaId, status_id: constants.status.ACTIVE };

        return this.where(params)
            .fetchAll()
            .then(res => res.toJSON())
            .catch(error => {
                throw error;
            });
    }
});

module.exports = Gift;
