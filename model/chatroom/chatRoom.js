const schema = require('./chatRoom.schema.js');
const mongoose = require('../db/db.js');
const ChatRoomModel = mongoose.model('ChatRoom', schema);
const {UserModel} = require('../user/user.js');

class ChatRoomRepository {

    static async getByObjectId(_id) {

        return UserModel.findOne({_id: _id}).exec();
    }

    static async getManyByObjectId(_ids) {

        return UserModel.find({
            id: {
                $in: _ids
            }
        }).exec();
    }

    static async getMembers (_room) {

        return UserModel.find({
            id: {
                $in: _room.members
            }
        }).exec();
    }
}

module.exports = {ChatRoomModel, ChatRoomRepository}