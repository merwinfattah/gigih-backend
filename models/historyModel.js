const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
  userId: {
    type: Number,
    required: true,
  },
  applicationDate: {
    type: Number,
    required: true,
  },
  franchiseId: {
    type: Number,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  franchiseeID: {
    type: Number,
    required: true,
  },
  franchiseeName: {
    type: String,
    required: true,
  },
  franchiseeAddress: {
    type: String,
    required: true,
  },
  franchiseePlaceDateBirth: {
    type: Number,
    required: true,
  },
  franchiseePhoneNumber: {
    type: Number,
    required: true,
  },
  franchiseName: {
    type: String,
    required: true,
  },
  franchiseAddress: {
    type: String,
    required: true,
  },
  franchisePhoneNumber: {
    type: Number,
    required: true,
  },
  fundingCapital: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("histories", historySchema, "history");
