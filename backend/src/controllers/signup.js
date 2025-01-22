const userService = require('../service/signup'); // Import the userService

async function createUser(req, res) {
    try {
        const userData = req.body;

        console.log("Received user data in controller:", userData);

        if (!userData || Object.keys(userData).length === 0) {
            throw new Error('User data is required');
        }
        const user = await userService.createUser(userData);
        res.status(201).json({ user, message: 'User created successfully' });
    } catch (error) {
        console.error("Error in createUser controller:", error.message);
        res.status(400).json({ message: error.message });
    }
}

module.exports = { createUser };
