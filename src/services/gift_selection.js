const GiftSelectionModel = require('src/models/gift_selection');

const giftSelection = (params) => {
    return new Promise((resolve, reject) => {
        return new GiftSelectionModel().fetchGiftsBasedOnOptions(params)
            .then((response) => {
                console.log(response);
                resolve(response);
            })
            .catch(error => {
                reject(error);
            })
    })
};

module.exports = giftSelection;