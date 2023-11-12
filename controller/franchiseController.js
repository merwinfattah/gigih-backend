const {
  fetchAllFranchise,
  fetchFranchiseById,
  saveFranchise,
} = require("../services/franchiseService");

async function getAllFranchise(req, res) {
  try {
    const franchises = await fetchAllFranchise();
    res.status(200).json(franchises);
  } catch (error) {
    res.status(500).json({ message: `controller ${error.message}` });
  }
}

async function getOneFranchise(req, res) {
  try {
    const franchise = await fetchFranchiseById(req.params.franchiseId);
    res.status(200).json(franchise);
  } catch (error) {
    res.status(500).json({ message: `controller ${error.message}` });
  }
}
async function applyFranchise(req, res) {
  try {
    const newUser = {
      franchiseeID: req.body.franchiseeID,
      frachiseeName: req.body.frachiseeName,
      franchiseeAdress: req.body.franchiseeAdress,
      franchiseePlaceDateBirth: req.body.franchiseePlaceDateBirth,
      franchiseePhoneNumber: req.body.franchiseePhoneNumber,
      franchiseName: req.body.franchiseName,
      franchiseAddress: req.body.franchiseAddress,
      franchisePhoneNumber: req.body.franchisePhoneNumber,
      fundingCapital: req.body.fundingCapital,
    };
    const saveUser = await saveFranchise(newUser);
    res.status(201).json(saveUser);
  } catch (error) {
    res.status(500).json({ message: `controller ${error.message}` });
  }
}

module.exports = { getAllFranchise, getOneFranchise, applyFranchise };
