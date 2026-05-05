const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getAllCourses, seedCourses } = require('../controllers/courseController');

router.get('/', getAllCourses);
router.post('/seed', auth, seedCourses);

module.exports = router;