const logger = require('src/lib/logger');
const Gift = require('src/models/gift');
const Utils = require('src/lib/utils');
const shuffleArray = Utils.shuffleArray;

const giftService = (giftIdeaId, reqId) => {
    logger.info(`Request ID : ${reqId} - fetching purchase links under an idea from service`);

    return new Gift().fetchGiftsUnderAnIdea(giftIdeaId)
        .then(response => {
            if (response) return shuffleArray(response);
        })
        .catch(error => {
            throw error;
        });
};

module.exports = giftService;
