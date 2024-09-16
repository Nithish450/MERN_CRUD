const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for the auth collection
const authSchema = new Schema({
  firstname: {
    type: String,
    required: true,
    trim: true
  },
  lastname: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
    enum: ['admin'],
    default: 'admin'
  }
}, { timestamps: true }); // Automatically add createdAt and updatedAt fields

// Create and export the model with a specific collection name
const AuthModel = mongoose.model('Auth', authSchema, 'admins'); // Use 'admins' as the collection name

module.exports = AuthModel;
