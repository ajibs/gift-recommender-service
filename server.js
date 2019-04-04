const express = require('express');
const server = express();
const config = require('src/config/config');
const logger = require('src/lib/logger');
const PORT = config.webServer.port;
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('src/routes/routes');

server.use(cors());

server.use(bodyParser.json());

server.use('/', routes);

server.listen(PORT, () => {
    logger.info(`App started and listening on port: ${PORT}`);
});

module.exports = server;
