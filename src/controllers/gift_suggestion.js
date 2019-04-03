const giftSuggestionService = require('src/services/gift_suggestion');
const shortid = require('shortid');
const logger = require('src/lib/logger');

const giftSuggestionController = (req, res) => {
    const reqId = shortid.generate();
    logger.info(`Request ID : ${reqId} - creating new gift suggestion from controller`);
    const giftSuggestionLabel = req.body.giftSuggestionLabel;

    return giftSuggestionService(reqId, giftSuggestionLabel)
        .then((data) => {
            logger.info(`Request ID : ${reqId} - Successfully created new gift suggestion: ${JSON.stringify(data)}`);
            res.send({
                status: 200,
                data
            });
        })
        .catch(error => {
            logger.error(`Request ID : ${reqId} - Error occurred while creating new gift suggestion. Error: ${error}`);
            res.send({
                status: 400
            });
        });
};

module.exports = giftSuggestionController;
