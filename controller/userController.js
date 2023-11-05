const {saveUserData, fetchUserProfile, retrieveUser} = require('../services/userService');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();

async function registerUser(req, res) {
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        const newUser = {
            username: req.body.username,
            password: hashedPassword,
            email: req.body.email,
            rolename: req.body.rolename,
            phoneNumber: req.body.phoneNumber
        }
        const saveUser = await saveUserData(newUser);
        res.status(200).json(saveUser)
    } catch(error) {
        res.status(500).json({ message: `controller ${error.message}`});
    }
    
}

async function getUserProfile(req, res) {
    try {
        const userProfile = await fetchUserProfile(req.params.userId);
        res.status(200).json(userProfile)
    } catch(error) {
        res.status(500).json({ message: `controller ${error.message}`});
    }
}

async function getTokenAuth(req, res) {
    try {
        const user = await retrieveUser(req.body.email);
        if (user) {
            const result = await bcrypt.compare(req.body.password, user.password);
            if (result) {
                const userPayload = {
                    userId: user._id,
                    username: user.username,
                    email: user.email,
                    rolename: user.rolename,
                };
                const token = jwt.sign(userPayload, process.env.TOKEN_SECRET);
                res.status(200).json({ token });
            }
        }
    } catch(error) {
        res.status(500).json({ message: `controller ${error.message}`});
    }
}

module.exports = {registerUser, getUserProfile, getTokenAuth};