const express = require('express');
const router = express.Router();
const giftSelectionController = require('src/controllers/gift_selection');
const giftIdeaController = require('src/controllers/gift_idea');
const giftController = require('src/controllers/gift');

router.get('/', (req, res) => {
    res.send('Hello World! Welcome to Gift Recommender Service');
});

router.post('/gift', (req, res) => giftSelectionController(req, res));

router.get('/gift-idea', (req, res) => giftIdeaController(req, res));

router.get('/gift/gift-idea/:gift_idea_id', (req, res) => giftController(req, res));

module.exports = router;
