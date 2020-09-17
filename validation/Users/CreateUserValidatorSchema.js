const Joi = require('joi');

module.exports = Joi.object({
  name: Joi.string().required().min(2),
  email: Joi.string().required().email(),
  password: Joi.string().required().min(8),
});
