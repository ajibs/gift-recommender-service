const bookshelf = require('bookshelf_config');

const Gift = require('src/models/gift');

const GiftSelection = bookshelf.Model.extend({
    tableName: 'gift_selection',

    gift: function () {
        return this.belongsTo(Gift);
    },

    fetchGiftsBasedOnOptions: function (params) {
        const { age_id, budget_id } = params;
        console.log('fetching from database');
        return this.where({ age_id, budget_id })
            .fetchAll({ withRelated: 'gift' })
            .catch(error => {
                throw error;
            });
    }
});

module.exports = GiftSelection;
