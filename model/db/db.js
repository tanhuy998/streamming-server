const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_ADDRESS);

const userSchema = require('./user.schema.js');
const chatSchema = require('./chatRoom.schema.js');


module.exports = mongoose;