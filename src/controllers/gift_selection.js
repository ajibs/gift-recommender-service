const giftSelectionService = require('src/services/gift_selection');
const shortid = require('shortid');
const logger = require('src/lib/logger');

const giftSelectionController = (req, res) => {
    const reqId = shortid.generate();
    const params = req.body;
    logger.info(`Request ID : ${reqId} - fetching gifts selection from controller with params`, params);

    return giftSelectionService(params, reqId)
        .then((data) => {
            logger.info(`Request ID : ${reqId} - Successfully fetched gifts selections: ${JSON.stringify(data)}`);
            res.send({
                status: 200,
                data
            });
        })
        .catch(error => {
            logger.error(`Request ID : ${reqId} - Error occurred while fetching gifts selections. Error: ${error}`);
        });
};

module.exports = giftSelectionController;
