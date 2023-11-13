const mongoose = require('mongoose');

const applySchema = mongoose.Schema({
    franchisee_id: {
        type: String,
        required: true
    },
    franchisee_name: {
        type: String,
        required: true
    },
    franchisee_address: {
        type: String,
        required: true
    },
    franchisee_placeDateBirth: {
        type: String,
        required: true
    },
    franchisee_phone: {
        type: String,
        required: true
    },
    franchise_name: {
        type: String,
        required: true
    },
    franchise_address: {
        type: String,
        required: true
    },
    franchise_phone: {
        type: String,
        required: true
    },
    funding_capital: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Apply', applySchema);