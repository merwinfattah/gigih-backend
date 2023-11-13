const Apply = require('../models/applyModel');
const histories = require('../models/historyModel');

async function saveApplyFranchise (application) {
    const applicationSave = new Apply(application);
    await applicationSave.save();
}

async function addHistory (historyData) {
    const newHistory = new histories(historyData);
    await newHistory.save();
}

module.exports = {saveApplyFranchise, addHistory};