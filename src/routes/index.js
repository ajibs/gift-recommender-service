const express = require('express');
const router = express.Router();
const giftSelectionController = require('src/controllers/gift_selection');
const giftIdeaController = require('src/controllers/gift_idea');

router.get('/', (req, res) => {
    res.send('Hello World! Welcome to Gift Recommender Service');
});

router.post('/gift', (req, res) => giftSelectionController(req, res));

router.get('/gift-idea', (req, res) => giftIdeaController(req, res));

module.exports = router;
