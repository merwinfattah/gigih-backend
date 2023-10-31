const express = require('express');
const router = express.Router();
const {getHistory} = require('../controller/historyController');

router.get('/:userId/history', getHistory);

module.exports = router;