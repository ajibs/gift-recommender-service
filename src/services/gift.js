const logger = require('src/lib/logger');
const Gift = require('src/models/gift');

const giftService = (giftIdeaId, reqId) => new Promise((resolve, reject) => {
    logger.info(`Request ID : ${reqId} - fetching gifts under an idea from service`);

    new Gift().fetchGiftsUnderAnIdea(giftIdeaId)
        .then((response) => {
            resolve(response);
        })
        .catch(error => {
            reject(error);
        });
});

module.exports = giftService;
