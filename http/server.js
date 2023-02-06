const Express = require('express');
const {auth} = require('../libs/auth.js');

const app = Express();

const chatRoutes = require('./api/v1/chat.js');

app.use('/api/v1/chat/glance', chatRoutes);

module.exports = app;