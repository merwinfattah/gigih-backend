const {saveUserData, fetchUserProfile, retrieveUser} = require('../services/userService');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();

async function registerUser(req, res) {
    try {
        const saltRounds = 10;
        const newUser = {
            user_id: uuidv4(),
            username: req.username,
            password: bcrypt.hash(req.password, saltRounds),
            email: req.email,
            rolename: req.rolename,
            phoneNumber: req.phoneNumber
        }
        const saveUser = await saveUserData(newUser);
        res.status(200).json(saveUser)
    } catch(error) {
        res.status(500).json({ message: `controller ${error.message}`});
    }
    
}

async function getUserProfile(req, res) {
    try {
        const userProfile = await fetchUserProfile(req.user_id);
        res.status(200).json(userProfile)
    } catch(error) {
        res.status(500).json({ message: `controller ${error.message}`});
    }
}

async function getTokenAuth(req, res) {
    try {
        const user = await retrieveUser(req.email);
        if (user) {
            const result = await bcrypt.compare(req.password, user.password);
            if (result) {
                const token = jwt.sign(user, process.env.TOKEN_SECRET);
                res.status(200).json({ token });
            }
        }
    } catch(error) {
        res.status(500).json({ message: `controller ${error.message}`});
    }
}

module.exports = {registerUser, getUserProfile, getTokenAuth};