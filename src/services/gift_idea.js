const logger = require('src/lib/logger');
const GiftIdea = require('src/models/gift_idea');
const Utils = require('src/lib/utils');
const shuffleArray = Utils.shuffleArray;

const giftIdeaService = (reqId) => new Promise((resolve, reject) => {
    logger.info(`Request ID : ${reqId} - fetching all gifts ideas from service`);

    new GiftIdea().fetchAllGiftIdeas()
        .then((response) => {
            resolve(shuffleArray(response));
        })
        .catch(error => {
            reject(error);
        });
});

module.exports = giftIdeaService;
