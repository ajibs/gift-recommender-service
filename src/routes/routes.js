const express = require('express');
const router = express.Router();
const giftSelectionController = require('src/controllers/gift_selection');
const giftIdeaController = require('src/controllers/gift_idea');
const giftController = require('src/controllers/gift');
const giftSuggestionController = require('src/controllers/gift_suggestion');

router.get('/', (req, res) => {
    res.send('Hello World! Welcome to Gift Recommender Service');
});

router.post('/gift', (req, res) => giftSelectionController(req, res));

router.get('/gift-idea/all', (req, res) => giftIdeaController(req, res));

router.get('/gift/gift-idea/:gift_idea_id', (req, res) => giftController(req, res));

router.post('/gift-suggestion', (req, res) => giftSuggestionController(req, res));

module.exports = router;
