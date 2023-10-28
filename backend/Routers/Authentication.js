// routes.js

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require("../models/User");


// Route to handle user registration
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
      // Check if the email is already registered
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'Email is already registered' });
      }
  
      // Create a new user
      const newUser = new User({ username, email, password });
  
      // Save the user to the database
      await newUser.save();
  
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });



// Route to handle user login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user with the given email exists
    const user = await User.findOne({ email });

    // If the user is not found, return a login failed message
    if (!user) {
      return res.status(401).json({ message: 'Login failed. User not found.' });
    }

    // Check if the password matches (without hashing for simplicity)
    if (user.password !== password) {
      return res.status(401).json({ message: 'Login failed. Incorrect password.' });
    }

    // If both email and password are correct, return a login success message
    res.status(200).json({ message: 'User login successful' });
  } catch (error) {
    console.error('Error during user login:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;



