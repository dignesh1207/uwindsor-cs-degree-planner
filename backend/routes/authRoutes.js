const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

// POST request to /api/auth/register
router.post('/register', registerUser);

// POST request to /api/auth/login
router.post('/login', loginUser);

module.exports = router;