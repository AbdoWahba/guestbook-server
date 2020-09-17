const express = require('express');
const CreateUserSchemaValidator = require('../validation/users/CreateUserValidatorSchema');
const JoiValidatorMiddleware = require('../middlewares/JoiValidatorMiddleware');
const CreateUserController = require('../controllers/users/CreateUserController');
const router = express.Router();

// @route /api/users
// @desc create new user
// @access public
router.post(
  '/',
  JoiValidatorMiddleware(CreateUserSchemaValidator),
  CreateUserController
);

module.exports = router;
