const User = require('../models/userModel');

async function saveUserData (user) {
    const userSave = new User(user);
    await userSave.save();
}

async function fetchUserProfile (userId) {
    return await User.findById(userId);
}

async function retrieveUser (email) {
    const userData = await User.findOne({ email: email});
    return userData;
}

module.exports = {saveUserData, fetchUserProfile, retrieveUser};