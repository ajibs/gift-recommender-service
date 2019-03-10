const joi = require('joi');

module.exports = {
    age: joi.string().required(),
    budget: joi.string().required()
};
