const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
    userId: {
        type: Number,
        required: true
    },
    applicationDate: {
        type: Number,
        required: true
    },
    franchiseId: {
        type: Number,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('histories', historySchema, 'history');