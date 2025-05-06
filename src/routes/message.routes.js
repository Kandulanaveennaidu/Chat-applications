const express = require('express');
const router = express.Router();
const messageController = require('../controllers/message.controller');

router.post('/messages', messageController.sendMessage);
router.get('/messages/:userId', messageController.getMessages);
router.put('/messages/:id', messageController.updateMessage);
router.delete('/messages/:id', messageController.deleteMessage);

module.exports = router;