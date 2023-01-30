const {login, auth} = require('../../../libs/auth.js');
const ChatController = require('../../../controller/chatController.js');
const router = require('express').Router();
const dispatch = require('../../../libs/requestDispatcher.js');

//router.post('/login', login);

// http chat routes

router.all('*', auth);

router.use('/glance/:userId', )

router.get('/glance/:userId/top/:optionNumber', dispatch(ChatController.getTopChat));

router.get('/glance/:userId/paginate/:number');

router.get('/:userId/room/:roomId');

router.get('/',() => {});

module.exports = router;