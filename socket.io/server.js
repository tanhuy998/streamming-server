const {Server} = require('socket.io');
const api = require('./api/v1');
const port = process.env.WS_PORT;


const io = new Server();

io.on('connection', api);

module.exports = io;