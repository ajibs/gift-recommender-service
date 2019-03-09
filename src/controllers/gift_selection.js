const giftSelectionService = require('src/services/gift_selection');

const giftSelectionController = (req, res) => {
    const params = req.query;
    console.log('hit controller');
    return giftSelectionService(params)
        .then((result) => {
            res.send(result);
        });
};

module.exports = giftSelectionController;