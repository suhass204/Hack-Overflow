const express = require('express');
const router = express.Router();
const chatController = require('./chatController');

router.post('/chat', chatController.Chat);

module.exports = router;
