const mongoose = require('mongoose');


const conn_string = process.env.MONGODB_CONN.replace(/<password>/, process.env.MONGODB_PASS);
mongoose.connect(conn_string);


module.exports = mongoose;