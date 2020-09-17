const Joi = require('joi');

module.exports = Joi.object({
  parent_id: Joi.string().required(),
  list_receivers: Joi.array().items(Joi.string().email()),
  title: Joi.string().required().min(1).max(150),
  body: Joi.string().required().min(1),
});
