const Apply = require('../models/applyModel');

async function saveApplyFranchise (application) {
    const applicationSave = new Apply(application);
    await applicationSave.save();
}

module.exports = {saveApplyFranchise};