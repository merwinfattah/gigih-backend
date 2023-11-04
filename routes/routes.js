const express = require('express');
const router = express.Router();
const {getHistory} = require('../controller/historyController');
const {registerUser, getUserProfile, getTokenAuth } = require('../controller/userController')

router.get('/:userId/history', getHistory);

router.get('/:userId/profile', async (req, res) =>  {
    await getUserProfile(req, res);
});

router.get('/signin', async (req, res) => {
    await getTokenAuth(req, res);
});

router.post('/signup', async (req, res) => {
    await registerUser(req, res);
});

module.exports = router;