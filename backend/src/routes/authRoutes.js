const express = require('express');
const router = express.Router();
const User = require('../models/User');

// POST route for user sign-up
router.post('/signup', async (req, res) => {
  try {
    // Extract user data from request body
    const { email, username, password } = req.body;

    // Check if user already exists
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    const newUser = new User({ email, username, password });
    await newUser.save();

    // Respond with success message
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error signing up user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
