require('dotenv').config();

const http_mod = process.env.HTTP_MOD;

const http = require(http_mod);
const expressApp = require('./http/server.js');
const wsApp = require('./socket.io/server.js');



//const app = Express();
const httpServer = http.createServer(expressApp);
//const io = new Server(server);

const http_port = parseInt(process.env.HTTP_PORT);
const ws_port = parseInt(process.env.WS_PORT);

wsApp.attach(httpServer);

httpServer.listen(http_port, () => {

    console.log(`server started on port ${http_port}`);
})