// Initialize Mongoose
const mongoose = require('mongoose');

// Initialize Schema
const Schema = mongoose.Schema;

// Structure of Schema
const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

// Exporting Schema
module.exports = mongoose.model('Posts', PostSchema);