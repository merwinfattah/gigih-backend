const {fetchHistory} = require('../services/historyService');

async function getHistory(req, res) {
    try {
    const userId = req.params.userId;
    console.log(userId);
    const history = await fetchHistory(userId);
    res.status(200).json(history)
    }
    catch (error) {
        res.status(500).json({ message: `controller ${error.message}`});
    }
}

module.exports = {getHistory};