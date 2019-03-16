const express = require('express');
const router = express.Router();
const giftSelectionController = require('src/controllers/gift_selection');

router.get('/', (req, res) => {
    res.send('Hello World! Welcome to Gift Recommender Service');
});

router.post('/gifts', (req, res) => giftSelectionController(req, res));

module.exports = router;
