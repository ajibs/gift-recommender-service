const logger = require('src/lib/logger');
const GiftIdea = require('src/models/gift_idea');
const Utils = require('src/lib/utils');
const shuffleArray = Utils.shuffleArray;

const giftIdeaService = (reqId) => {
    logger.info(`Request ID : ${reqId} - fetching all gifts ideas from service`);

    return new GiftIdea().fetchAllGiftIdeas()
        .then(response => {
            if (response) return shuffleArray(response);
        })
        .catch(error => {
            throw error;
        });
};

module.exports = giftIdeaService;
