const express = require('express');
const router = express.Router();
const { getAllCourses, seedCourses } = require('../controllers/courseController');

// GET request to /api/courses (Public route, anyone can view the catalog)
router.get('/', getAllCourses);

// POST request to /api/courses/seed (To add your initial data)
router.post('/seed', seedCourses);

module.exports = router;