const express = require('express');
const router = express.Router();
const UserModel = require('../schema/user');

// POST route to add a new user
router.post('/addUser', async (req, res) => {
  console.log('Request body:', req.body); // Log the request body

  try {
    const newUser = new UserModel({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email
    });

    const result = await newUser.save();
    if (result) {
      res.send({ status: 1, message: "User added successfully", id: result._id });
    } else {
      res.status(500).send({ status: 0, message: "User not added" });
    }
  } catch (error) {
    console.error('Error:', error.message); // Log detailed error message
    res.status(500).send({ status: 0, message: "Error adding user", error: error.message });
  }
});

// GET route to fetch all users
router.get('/users', async (req, res) => {
  try {
    const users = await UserModel.find();
    res.send(users);
  } catch (error) {
    res.status(500).send({ status: 0, message: "Error fetching users", error: error.message });
  }
});

// GET route to fetch a single user by ID
router.get('/user/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const user = await UserModel.findById(id);
    if (user) {
      res.send(user);
    } else {
      res.status(404).send({ message: "User not found" });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).send({ message: "Error fetching user", error: error.message });
  }
});

// PUT route to update a user
router.put('/updateUser/:id', async (req, res) => {
  const { id } = req.params;
  const { firstname, lastname, email } = req.body;

  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      id,
      { firstname, lastname, email },
      { new: true, runValidators: true }
    );

    if (updatedUser) {
      res.send({ status: 1, message: "User updated successfully", user: updatedUser });
    } else {
      res.status(404).send({ status: 0, message: "User not found" });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).send({ status: 0, message: "Error updating user", error: error.message });
  }
});

// DELETE route to delete a user
router.delete('/deleteUser/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserModel.findByIdAndDelete(id);
    if (result) {
      res.send({ status: 1, message: "User deleted successfully" });
    } else {
      res.status(404).send({ status: 0, message: "User not found" });
    }
  } catch (error) {
    res.status(500).send({ status: 0, message: "Error deleting user", error: error.message });
  }
});

module.exports = router;
