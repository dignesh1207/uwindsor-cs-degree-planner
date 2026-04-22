const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true, 
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    // Academic Profile
    university: {
        type: String,
        default: 'University of Windsor'
    },
    program: {
        type: String,
        default: 'Bachelor of Computer Science'
    },
    startingSemester: {
        type: String,
        required: false 
    },
    courseLoad: {
        type: String,
        enum: ['full', 'part'], 
        default: 'full'
    },
    // Track what they've already taken
    completedCourses: [{
        type: String 
    }]
}, { timestamps: true }); 

module.exports = mongoose.model('User', userSchema);