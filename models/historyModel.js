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
    franchiseId: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('histories', historySchema, 'history');