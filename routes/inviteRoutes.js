const express = require('express');
const router = express.Router();
const inviteController = require('../controllers/inviteController');

// Route to register an email and get the share link
router.post('/register', inviteController.registerEmail);

module.exports = router;
