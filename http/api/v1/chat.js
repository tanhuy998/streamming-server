const {login, auth} = require('../../../libs/auth.js');
const ChatController = require('../../../controller/chatController.js').proxy;

const Express = require('express');
const dispatch = require('../../../libs/requestDispatcher.js');
const { router } = require('../../server.js');

//router.post('/login', login);

// http chat routes
const router1 = Express.Router();
const router2 = Express.Router();

router1.all('*', auth);
router2.all('*', auth);

//router.use('/glance/:userId', )

// GET /api/version/:userId/chat/top

// GET /api/version/:userId/chat/top/:number

// GET /api/version/:userId/chat/:chatId

// GET /api/version/:userId/chat/paginate/:number/page/:pageNumber

// DELETE /api/vesion/chat/:chatId/message/:messageId 

router1.get('/:userId/chat/top', dispatch(...ChatController.getDefaultTopChat));

router1.get('/:userId/chat/top/:number', dispatch(...ChatController.getNumberOfTopChat));

router1.get('/:userId/chat/:chatId', dispatch(...ChatController.getSpecificChat));

router1.get('/:userId/chat/paginate/:number/page/:pageNumber', dispatch(...ChatController.getChatsInPaginatedOrders));

// POST /api/version/login
// PUT /api/version/chat/:chatId/


// router2.get('/login');

// router2.put('chat/:chatId/');



