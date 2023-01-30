const {UserRepository, UserModel} = require('../model/user/user');

class ChatController {

    constructor() {

    }

    async getTopChat(req, res) {

        const {id} = req.userData;

        const user = await UserRepository.getById(id);

        const chat_rooms = await UserRepository.getChatRooms(user);

        const 
    }
}

module.exports = ChatController;