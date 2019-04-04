const bookshelf = require('bookshelf_config');

const GiftIdea = require('src/models/gift_idea');

const GiftSelection = bookshelf.Model.extend({
    tableName: 'gift_selection',

    giftIdea: function () {
        return this.belongsTo(GiftIdea);
    },

    // TODO: migration to make `price` on gift table nullable
    // TODO: write migration for new gift_selection table: `budget_id` and `gift_idea_id` only

    fetchGiftsBasedOnOptions: function (params) {
        return this.where(params)
            .fetchAll({ require: true, withRelated: 'giftIdea' })
            .then(res => res.toJSON())
            .catch(error => {
                throw error;
            });
    }
});

module.exports = GiftSelection;
