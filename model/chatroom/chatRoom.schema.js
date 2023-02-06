const {Schema, default: mongoose} = require('mongoose');

const chatSchema = new Schema({
    members: [Number],
    Messages: [
        {
            from: Number,
            time: Date,
            deleted: Boolean,
            content: Buffer,
            contentType: mongoose.Types.ObjectId
        }
    ],
    lastUpdate: Date
});

module.exports = chatSchema;