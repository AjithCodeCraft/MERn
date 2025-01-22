// const express = require('express'); // Import express
// const SignupController = require('../controllers/signup'); // Import SignupController

// const router = express.Router(); // Create a router instance

// router.post('/register', SignupController.createUser); // Define a POST route for signup

// module.exports = router; // Export the router


const express = require('express');
const router = express.Router();
const SignupController = require('../controllers/signup');

router.post('/register', SignupController.createUser);

module.exports = router;
