const Joi = require('joi');

module.exports = Joi.object({
  description: Joi.string().min(5).required(),
  date: Joi.date().required(),
  status: Joi.string().min(6).required(),
});