const express = require('express');
const app = express();
const config = require('src/config/config');

app.get('/', (req, res) => {
    res.send('Hello World')
});

console.log('app started');

app.listen(config.webServer.port);