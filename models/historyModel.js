const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    applicationDate: {
        type: Date,
        required: true
    },
    franchiseName: {
        type: String,
        required: true
    },
    franchiseAddress: {
        type: String,
        required: true
    },
    franchisePhone: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('histories', historySchema, 'history');