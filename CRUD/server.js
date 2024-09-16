const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Use CORS middleware
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/crud', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(() => console.log("DB connected successfully"))
.catch(error => console.error("DB connection error:", error));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// Import and use routes
const userRoutes = require('./controllers/user');
app.use('/api', userRoutes); // Prefix routes with /api

const adminRoutes = require('./controllers/admin');  // Add the admin routes
app.use('/api', adminRoutes); 

const port = 4000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
