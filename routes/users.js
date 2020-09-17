const express = require('express');
const CreateUserSchemaValidator = require('../validation/users/CreateUserValidatorSchema');
const JoiValidatorMiddleware = require('../middlewares/JoiValidatorMiddleware');
const IsLoggedInMiddleware = require('../middlewares/IsLoggedInMiddleware');
const CreateUserController = require('../controllers/users/CreateUserController');
const GetUserProfileController = require('../controllers/users/GetUserProfileController');
const router = express.Router();

// @route /api/users
// @desc create new user
// @access public
router.post(
  '/',
  JoiValidatorMiddleware(CreateUserSchemaValidator),
  CreateUserController
);

router.get('/profile', IsLoggedInMiddleware, GetUserProfileController);

module.exports = router;
