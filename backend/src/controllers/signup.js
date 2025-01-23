const userService = require('../service/signup');

async function createUser(req, res) {
    try {
        const userData = req.body;
        console.log("Received user data in controller:", userData); // Add this line to log userData
        if (!userData) {
            throw new Error('User data is required');
        }
        const user = await userService.createUser(userData);
        res.status(201).json({user:user,message:'User created successfully'});
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message});
    }
}

module.exports = {createUser};