const User = require('../models/user');
const bcrypt = require('bcrypt');

async function createUser(userData) {
    const { name, email, password } = userData;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user with the correct field name for password
    const createdUser = new User({
        name,
        email,
        password: hashedPassword, // Correctly assigned
        role: 'customer'
    });

    console.log("Received user data:", userData);
    

    

    // Save the user to the database
    const savedUser = await createdUser.save();
    return savedUser;
}

module.exports = { createUser };
