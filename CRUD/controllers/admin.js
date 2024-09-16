const express = require('express');
const router = express.Router();
const AuthModel = require('../schema/auth'); // Ensure the path is correct
const bcrypt = require('bcryptjs'); // For hashing passwords

// Admin registration route
router.post('/addAdmin', async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = new AuthModel({
      firstname,
      lastname,
      email,
      password: hashedPassword,
      role: 'admin'
    });

    await newAdmin.save();
    res.status(201).json({ message: "Admin added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error adding admin", error: error.message });
  }
});

// Admin login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the admin by email
    const admin = await AuthModel.findOne({ email });

    if (admin && await bcrypt.compare(password, admin.password)) {
      res.status(200).json({ status: 1, message: "Login successful", admin });
    } else {
      res.status(401).json({ status: 0, message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ status: 0, message: "Error logging in", error: error.message });
  }
});

module.exports = router;
        