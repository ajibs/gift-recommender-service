const giftService = require('src/services/gift');
const shortid = require('shortid');
const logger = require('src/lib/logger');

const giftController = (req, res) => {
    const reqId = shortid.generate();
    logger.info(`Request ID : ${reqId} - fetching purchase links under an idea from controller`);

    return giftService(req.params.gift_idea_id, reqId)
        .then((data) => {
            logger.info(
                `Request ID : ${reqId} - Successfully fetched purchase links under an idea.
                Gifts: ${JSON.stringify(data)}
                `
            );
            res.send({
                status: 200,
                data
            });
        })
        .catch(error => {
            logger.error(
                `Request ID : ${reqId} - Error occurred while fetching purchase links under an idea. Error: ${error}`
            );
        });
};

module.exports = giftController;
