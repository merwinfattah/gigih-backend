const mongoose = require('mongoose');

const franchiseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    capital: {
        type: Number,
        required: true
    },
    phoneNumber: {
        type: String,
        requared: true
    }
})

module.exports = mongoose.model('Franchise', franchiseSchema);