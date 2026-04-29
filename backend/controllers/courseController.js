const Course = require('../models/Course');

// GET all courses
exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find(); // Fetches everything from the courses collection
        res.json(courses);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// POST route to "Seed" multiple courses at once
exports.seedCourses = async (req, res) => {
    try {
        // req.body will be the array of courses you created in your frontend
        const courses = await Course.insertMany(req.body); 
        res.status(201).json({ message: 'Courses successfully added to database!', courses });
    } catch (err) {
        console.error(err.message);
        // If you accidentally run it twice, MongoDB will throw an error because of the 'unique: true' rule on course codes
        res.status(500).json({ message: 'Error adding courses. You might have already seeded them!' });
    }
};