const {saveApplyFranchise, addHistory} = require('../services/applyService');

async function postFranchiseApplication(req, res) {
    try {
        const newApplication = {
            franchisee_id: req.body.franchisee_id,
            franchisee_name: req.body.franchisee_name,
            franchisee_address: req.body.franchisee_address,
            franchisee_placeDateBirth: req.body.franchisee_placeDateBirth,
            franchisee_phone: req.body.franchisee_phone,
            franchise_name: req.body.franchise_name,
            franchise_address: req.body.franchise_address,
            franchise_phone: req.body.franchise_phone,
            funding_capital: req.body.funding_capital
        };

        const saveApplication = await saveApplyFranchise(newApplication);
        res.status(200).json(saveApplication);
    } catch (error) {
        res.status(500).json({ message: `controller ${error.message}`});
    }
}

async function postHistory(req, res) {
    try {
        const newHistory = {
            userId: req.body.userId,
            applicationDate: new Date(),
            franchiseId: req.params.franchiseId, //using params or body ????
            status: false
        }

        const saveHistory = await addHistory(newHistory);
        res.status(201).json(saveHistory)
    }
    catch (error) {
        res.status(500).json({ message: `controller ${error.message}`});
    }
}

module.exports = {postFranchiseApplication, postHistory};