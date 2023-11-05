const Franchise = require('../models/franchiseModel');

async function fetchAllFranchise() {
    return await Franchise.find();
}

async function fetchFranchiseById(id) {
    return await Franchise.findById(id);
}

module.exports = {fetchAllFranchise, fetchFranchiseById};