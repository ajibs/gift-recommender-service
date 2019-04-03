const express = require('express');
const app = express();
const config = require('src/config/config');
const logger = require('src/lib/logger');
const PORT = config.webServer.port;
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('src/routes/routes');

app.use(cors());

app.use(bodyParser.json());

app.use('/', routes);

app.listen(PORT, () => {
    logger.info(`App started and listening on port: ${PORT}`);
});
