const logger = require('src/lib/logger');
const GiftIdea = require('src/models/gift_idea');
const constants = require('src/config/constants');
const Utils = require('src/lib/utils');
const transformLabelToCode = Utils.transformLabelToCode;

const giftSuggestionService = (reqId, giftSuggestionLabel) => {
    const code = transformLabelToCode(giftSuggestionLabel);
    const giftSuggestion = { label: giftSuggestionLabel, code, status_id: constants.status.INACTIVE };
    logger.info(`Request ID : ${reqId} - creating new gift suggestion from service with params: ${giftSuggestion}`);

    return new GiftIdea().createGiftSuggestion(giftSuggestion)
        .then(response => response)
        .catch(error => {
            throw error;
        });
};

module.exports = giftSuggestionService;
