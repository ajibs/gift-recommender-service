const GiftSelectionModel = require('src/models/gift_selection');
const logger = require('src/lib/logger');
const joi = require('joi');
const pick = require('lodash.pick');

const giftsSelectionSchema = require('src/validations/gift_selection');
const allowedKeys = ['budget'];
const constants = require('src/config/constants');

const validateParams = (params, schema, reqId) => {
    logger.info(`Request ID : ${reqId} - validating params`);

    joi.assert(params, schema);
    return pick(params, allowedKeys);
};

const extractIds = (params, reqId) => {
    logger.info(`Request ID : ${reqId} - extracting ids from params: ${JSON.stringify(params)}`);

    const result = {};
    for (const key of Object.keys(params)) {
        const code = params[key];
        result[`${key}_id`] = constants[key][code];
    }

    return result;
};

const formatPayload = (params, reqId) => {
    logger.info(`Request ID : ${reqId} - formatting payload`);

    const verifiedPayload = validateParams(params, giftsSelectionSchema, reqId);
    return extractIds(verifiedPayload, reqId);
};

const giftSelection = (params, reqId) => new Promise((resolve, reject) => {
    const formattedPayload = formatPayload(params, reqId);
    logger.info(`Request ID : ${reqId} - fetching gifts selection from service with payload`, formattedPayload);

    new GiftSelectionModel().fetchGiftsBasedOnOptions(formattedPayload)
        .then((response) => {
            resolve(response);
        })
        .catch(error => {
            reject(error);
        });
});

module.exports = giftSelection;
