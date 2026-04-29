const User = require('../models/User');

// Get current logged-in user's profile
exports.getUserProfile = async (req, res) => {
    try {
        // req.user.id comes from the auth middleware
        // .select('-password') ensures we don't send the hashed password back to the frontend
        const user = await User.findById(req.user.id).select('-password');
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};