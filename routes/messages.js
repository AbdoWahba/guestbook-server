const newMessageSchemaValidation = require('../validation/messages/newMessageSchemaValidation');
const JoiValidatorMiddleware = require('../middlewares/JoiValidatorMiddleware');
const IsLoggedInMiddleware = require('../middlewares/IsLoggedInMiddleware');
const CreateMessageController = require('../controllers/messages/CreateMessageController');
const FetchInboxMessagesListController = require('../controllers/messages/FetchInboxMessagesListController');
const FetchOutboxMessagesListController = require('../controllers/messages/FetchOutboxMessagesListController');
const express = require('express');
const router = express.Router();

// @route /api/messages
// @desc create new user
// @access public
router.post(
  '/',
  IsLoggedInMiddleware,
  JoiValidatorMiddleware(newMessageSchemaValidation),
  CreateMessageController
);

router.get('/outbox', IsLoggedInMiddleware, FetchOutboxMessagesListController);
router.get('/inbox', IsLoggedInMiddleware, FetchInboxMessagesListController);

module.exports = router;
