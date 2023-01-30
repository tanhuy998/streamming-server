const {Schema, default: mongoose} = require('mongoose');

const chatSchema = new Schema({
    members: [Number],
    chatQueue: [
        {
            from: Number,
            time: Date,
            contentType: mongoose.Types.ObjectId
        }
    ],
    lastUpdate: Date
});

module.exports = chatSchema;