const logger = require('src/lib/logger');
const GiftIdea = require('src/models/gift_idea');

const giftIdeaService = (reqId) => new Promise((resolve, reject) => {
    logger.info(`Request ID : ${reqId} - fetching gifts ideas from service`);

    new GiftIdea().fetchAllGiftIdeas()
        .then((response) => {
            resolve(response);
        })
        .catch(error => {
            reject(error);
        });
});

module.exports = giftIdeaService;
