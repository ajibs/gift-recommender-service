const https = require('https');
const logger = require('src/lib/logger');
const config = require('src/config/config');
const { dynosInfo, dynoAwakeInterval } = config;

// check if the current hour is between 8:00 (8am) and 22:59 (11pm)
function checkHourWithinBounds () {
    const currentHour = new Date().getHours();
    return (currentHour >= 8) || (currentHour <= 22);
}

function sendGetRequest (url, namespace) {
    logger.info(`Making GET request to dyno with url: ${url} and namespace: ${namespace}`);

    https.get(url, (res) => {
        res.on('data', () => {
            logger.info(`${namespace} - Successfully received response from dyno.`);
        });
    }).on('error', (err) => {
        console.error(`${namespace} - Error occurred while ensuring dyno is up. Error: ${err}`);
    });
}

function hitDynos () {
    if (checkHourWithinBounds()) {
        logger.info('Ensuring dynos are up');
        dynosInfo.forEach(dyno => {
            const { url, namespace } = dyno;
            sendGetRequest(url, namespace);
        });
    }
}

function bootstrapKeepAlive () {
    setInterval(function () {
        hitDynos();
    }, dynoAwakeInterval);
}

module.exports = {
    start: bootstrapKeepAlive
};
