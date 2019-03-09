const GiftSelectionModel = require('src/models/gift_selection');

const giftSelection = (params) => new Promise((resolve, reject) => new GiftSelectionModel().fetchGiftsBasedOnOptions(params)
    .then((response) => {
        console.log(response);
        resolve(response);
    })
    .catch(error => {
        reject(error);
    }));

module.exports = giftSelection;
