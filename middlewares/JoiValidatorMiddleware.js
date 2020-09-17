const Joi = require('joi');
module.exports = (JoiSchema) => (req, res, next) => {
  const { body } = req;
  JoiSchema.validateAsync(body)
    .then((data) => {
      req.body = data;
      next();
    })
    .catch((err) => res.status(400).json({ msg: err.details[0].message }));
};
