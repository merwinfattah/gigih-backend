const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: false
    },
    content: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('blogs', blogSchema, 'blog');