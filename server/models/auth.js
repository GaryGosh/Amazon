const mongoose = require('mongoose');
const crypto = require('crypto');

const UserShema = new mongoose.Schema({
    name: String,
    email: String,
    hashed_password: String,
    salt: String,
    role: String,
    resetPasswordLink: {
        data: String,
        default: '',
    },

}, { timestamps: true });

module.exports = mongoose('User', UserShema);