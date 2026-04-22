const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true, 
        uppercase: true
    },
    name: {
        type: String,
        required: true 
    },
    credits: {
        type: Number,
        default: 3
    },
    prereqs: [{
        type: String 
    }],
    description: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Course', courseSchema);