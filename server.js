const express = require('express');
const app = express();
const config = require('src/config/config');
const giftSelectionController = require('src/controllers/gift_selection');

app.get('/', (req, res) => {
    res.send('Hey bolu');
});

app.get('/gifts', (req, res) => {
    console.log('fetching gifts');
    return giftSelectionController(req, res);
});

console.log('app started');

app.listen(config.webServer.port);
