const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    phone:{
        type: int ,
        required: true
    },
    amount:{
        type: int,
        required: true
    },
    thoughts:{
        type: String,
        required: false
    }
});

module.exports = mongoose.model('User', UserSchema);