const Franchise = require("../models/franchiseModel");
const History = require("../models/historyModel");
async function fetchAllFranchise() {
  return await Franchise.find();
}

async function fetchFranchiseById(id) {
  return await Franchise.findById(id);
}

async function saveFranchise(history) {
  const historyData = new History(history);
  await historyData.save();
}
module.exports = { fetchAllFranchise, fetchFranchiseById, saveFranchise };
