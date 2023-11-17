const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema(
    {
        email:{
            type: String,
            required: "Your email is required",
            max: 25,
        },
        password:{
            type: String,
            required: "Your password is required",
            max: 25,
        },
        name: {
            type: String,
            required: "Your firstname is required",
            max: 25,
        },
    }
)

const User = mongoose.model('user',UserSchema);

module.exports = User;