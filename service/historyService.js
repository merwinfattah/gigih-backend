const histories = require('../models/historyModel');

async function fetchHistory (userId) {
    return await histories.find({userId : userId});
};

module.exports = {fetchHistory};