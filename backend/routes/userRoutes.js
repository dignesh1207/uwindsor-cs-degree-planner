const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth'); // Import our bouncer
const { getUserProfile } = require('../controllers/userController');

// GET request to /api/user/profile
// Notice how 'auth' is passed as the second argument. This protects the route!
router.get('/profile', auth, getUserProfile);

module.exports = router;