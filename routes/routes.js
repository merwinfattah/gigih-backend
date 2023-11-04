const express = require('express');
const router = express.Router();
const {getHistory} = require('../controller/historyController');
const {registerUser, getUserProfile, getTokenAuth } = require('../controller/userController')

router.get('/:userId/history', getHistory);

router.get('/:userId/profile', getUserProfile);

router.get('/signin', getTokenAuth);

router.post('/signup', registerUser);

module.exports = router;