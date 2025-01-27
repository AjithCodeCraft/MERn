const User = require('../models/user');
const bcrypt = require('bcrypt');

async function createUser(userData) {
    try {
        const { name, email, password } = userData;

        // Check if required fields are provided
        if (!name || !email || !password) {
            throw new Error("Name, email, and password are required.");
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user with hashed password
        const createdUser = new User({
            name,
            email,
            password: hashedPassword, // Correctly assigned
            role: 'customer',
        });

        console.log("Received user data:", userData);

        // Save the user to the database
        const savedUser = await createdUser.save();
        return savedUser;

    } catch (error) {
        console.error("Error in createUser:", error.message);
        throw error; // Propagate error to the calling function
    }
}

module.exports = { createUser };
