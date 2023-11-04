const User = require('../models/userModel');

async function saveUserData (user) {
    const user = new User(user);
    await user.save();
}

async function fetchUserProfile (userId) {
    return await User.findById(userId);
}

async function retrieveUser (email) {
    const userData = await User.findOne({ email: email});
    return userData;
}

module.exports = {saveUserData, fetchUserProfile, retrieveUser};