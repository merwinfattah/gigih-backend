const express = require('express');
const router = express.Router();
const {getHistory} = require('../controller/historyController');
const {registerUser, getUserProfile, getTokenAuth } = require('../controller/userController');
const {getAllFranchise, getOneFranchise} = require('../controller/franchiseController');
const {getAllBlog, getOneBlog} = require('../controller/blogController');
const {postFranchiseApplication, postHistory} = require('../controller/applyController');

router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.get('/history/:userId', getHistory);

router.get('/:userId/profile', async (req, res) =>  {
    await getUserProfile(req, res);
});

router.post('/signin', async (req, res) => {
    await getTokenAuth(req, res);
});

router.post('/signup', async (req, res) => {
    await registerUser(req, res);
});

router.get('/franchises', async (req, res) => {
    await getAllFranchise(req, res);
});

router.get('/franchises/:franchiseId', async (req, res) => {
    await getOneFranchise(req, res);
})

router.get('/blog', getAllBlog);

router.get('/blog/:blogId', getOneBlog);

router.post('/apply', async (req, res) => {
    await postFranchiseApplication(req, res);
    await postHistory(req, res); //not tested yet
})

module.exports = router;