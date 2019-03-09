const express = require('express');
const app = express();
const config = require('src/config/config');
const giftSelectionController = require('src/controllers/gift_selection');
const logger = require('src/lib/logger');

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/gifts', (req, res) => giftSelectionController(req, res));

app.listen(config.webServer.port, () => {
    logger.info('App started');
});
