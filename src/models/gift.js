const bookshelf = require('bookshelf_config');
const constants = require('src/config/constants');
const GiftIdea = require('src/models/gift_idea');

const Gift = bookshelf.Model.extend({
    tableName: 'gift',

    giftIdea: function () {
        return this.belongsTo(GiftIdea);
    },

    fetchGiftsUnderAnIdea: function (giftIdeaId) {
        const params = { gift_idea_id: giftIdeaId, status_id: constants.status.ACTIVE };

        return this.where(params)
            .fetchAll({ require: true, withRelated: 'giftIdea' })
            .then(res => res.toJSON())
            .catch(error => {
                throw error;
            });
    }
});

module.exports = Gift;
