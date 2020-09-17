const express = require('express');
const loginSchemaValidator = require('../validation/auth/loginSchemaValidator');
const JoiValidatorMiddleware = require('../middlewares/JoiValidatorMiddleware');
const loginController = require('../controllers/auth/loginController');
const router = express.Router();

// @route /api/auth
// @desc user login
// @access public
router.post('/', JoiValidatorMiddleware(loginSchemaValidator), loginController);

module.exports = router;
