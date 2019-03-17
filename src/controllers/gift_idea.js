const giftIdeaService = require('src/services/gift_idea');
const shortid = require('shortid');
const logger = require('src/lib/logger');

const giftIdeaController = (req, res) => {
    const reqId = shortid.generate();
    logger.info(`Request ID : ${reqId} - fetching gift ideas from controller`);

    return giftIdeaService(reqId)
        .then((data) => {
            logger.info(`Request ID : ${reqId} - Successfully fetched gift ideas: ${JSON.stringify(data)}`);
            res.send({
                status: 200,
                data
            });
        })
        .catch(error => {
            logger.error(`Request ID : ${reqId} - Error occurred while fetching gift ideas. Error: ${error}`);
            throw error;
        });
};

module.exports = giftIdeaController;
