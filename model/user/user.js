const mongoose = require('../db/db.js');
const userSchema = require('./user.schema.js');
const UserModel = mongoose.model('User', userSchema);
const {ChatRoomModel} = require('../chatroom/chatRoom.js'); 

class UserRepository {

    static async getById(_id) {

        return UserModel.findOne({id: _id}).exec();
    }

    static async getManyById(_ids) {

        return UserModel.find({
            id: {
                $in: _ids
            }
        }).exec();
    }

    static async getFriendsOf(_User) {

        return UserModel.find({
            id: {
                $in: _User.friends
            }
        }).exec();
    }

    static async getTopChatRooms(_User) {

        return ChatRoomModel.findById({
            $in: _User.ChatRooms
        })
        .select({chatQueue: {}, lastUpdate: 1})
        .sort({lastUpdate: 1})
        .limit(10)
        .exec();
    }
}

module.exports = {UserModel, UserRepository}