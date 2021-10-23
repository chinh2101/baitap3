const Joi = require('joi');

const addNga = {
  body: Joi.object().keys({
    fullName: Joi.string().required(),
    address: Joi.string().optional(),
  }),
};



module.exports = {
  addNga,
};
