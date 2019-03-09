const bookshelf = require('bookshelf_config');

const GiftSelection = bookshelf.Model.extend({
   tableName: 'gift_selection',

   fetchGiftsBasedOnOptions: function (params) {
       const { age_id, budget_id } = params;
       console.log('fetching from database');
       return this.where({ age_id, budget_id })
           .fetchAll()
           .catch(error => {
               throw error;
           });
   }
});

module.exports = GiftSelection;