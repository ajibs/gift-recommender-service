const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World')
});

console.log('app started');

app.listen(8080);