const express = require('express');
const app = express();
const config = require('src/config/config');
const giftSelectionController = require('src/controllers/gift_selection');
const logger = require('src/lib/logger');
const PORT = config.webServer.port;
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.post('/gifts', (req, res) => giftSelectionController(req, res));

app.listen(PORT, () => {
    logger.info(`App started and listening on port: ${PORT}`);
});
