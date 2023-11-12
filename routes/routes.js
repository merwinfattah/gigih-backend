const express = require("express");
const router = express.Router();
const { getHistory } = require("../controller/historyController");
const {
  registerUser,
  getUserProfile,
  getTokenAuth,
} = require("../controller/userController");
const {
  getAllFranchise,
  getOneFranchise,
  applyFranchise,
} = require("../controller/franchiseController");

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/:userId/history", getHistory);

router.get("/:userId/profile", async (req, res) => {
  await getUserProfile(req, res);
});

router.get("/signin", async (req, res) => {
  await getTokenAuth(req, res);
});

router.post("/signup", async (req, res) => {
  await registerUser(req, res);
});

router.get("/franchises", async (req, res) => {
  await getAllFranchise(req, res);
});

router.get("/franchises/:franchiseId", async (req, res) => {
  await getOneFranchise(req, res);
});

router.post("/franchises/apply", async (req, res) => {
  await applyFranchise(req, res);
});
module.exports = router;
