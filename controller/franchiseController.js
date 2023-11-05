const {fetchAllFranchise, fetchFranchiseById} = require('../services/franchiseService');


async function getAllFranchise(req, res) {
    try {
        const franchises = await fetchAllFranchise();
        res.status(200).json(franchises);
    } catch (error) {
        res.status(500).json({ message: `controller ${error.message}`});
    }
}

async function getOneFranchise(req, res) {
    try {
        const franchise = await fetchFranchiseById(req.params.franchiseId);
        res.status(200).json(franchise)
    } catch (error) {
        res.status(500).json({ message: `controller ${error.message}`});
    }
}

module.exports = {getAllFranchise, getOneFranchise};