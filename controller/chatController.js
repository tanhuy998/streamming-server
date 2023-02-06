//const {UserRepository, UserModel} = require('../model/user/user');
//const User = require('../libs/user/user.js');
const BaseController = require('./baseController.js');

class ChatController extends BaseController{

    static proxy = new Proxy(ChatController, BaseController.proxyHandler);

    constructor() {

        super();

        // return new Proxy(this, {
        //     get: (target, prop, receiver) => {

        //         if (!target[prop]) return undefined;

        //         if (typeof(target[prop]) == 'function') return target[prop].bind(target); 

        //         return target[prop];
        //     }
        // })
    }


    // /:userId/chat/paginate/:number/page/:pageNumber
    async getChatsInPaginatedOrders(_userId, _paginatedNumber, _pageNumber, req, res, next) {

    }

    // /:userId/chat/top
    async getDefaultTopChat(_userId, req, res, next) {

    }

    // /:userId/chat/top/:number
    async getNumberOfTopChat(_userId, _number, _pageNumber, req, res, next) {

    }

    // /:userId/chat/:chatId
    async getSpecificChat(_userId, _roomId, req, res, next) {

        console.log(this);
    }

    async #getChatRooms(_userId, _paginatedNumber = 10, _pageNumber = 1) {

        // const user_chatRooms = await UserRepository.getById(_userId)
        //                                 .select({chatRooms: {
        //                                     $order: 
        //                                 }})
        //                                 .exec();
    }
}

module.exports = ChatController;