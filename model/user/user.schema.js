const {Schema, default: mongoose} = require('mongoose');

userSchema = new Schema({
    id: Number,
    phone: String,
    password: String,
    session: {
        isLogin: Boolean,
        address: Number,
        port: Number,
    },
    info: {
        name: String,
        dateOfBirth: Date,
    },
    friends: [Number],
    chatRooms: [mongoose.Types.ObjectId]
}),

module.exports = userSchema;