const GiftSelectionModel = require('src/models/gift_selection');
const logger = require('src/lib/logger');
const joi = require('joi');
const pick = require('lodash.pick');

const giftsSelectionSchema = require('src/validations/gift_selection');
const allowedKeys = ['budget'];
const constants = require('src/config/constants');
const Utils = require('src/lib/utils');
const shuffleArray = Utils.shuffleArray;

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

const giftSelection = (params, reqId) => {
    const searchParams = formatPayload(params, reqId);
    logger.info(
        `Request ID : ${reqId} - searching for gift ideas from service using selection criteria: ${searchParams}`
    );

    return new GiftSelectionModel().fetchGiftsBasedOnOptions(searchParams)
        .then((response) => {
            if (response) return shuffleArray(response);
        })
        .catch(error => {
            throw error;
        });
};

module.exports = giftSelection;
