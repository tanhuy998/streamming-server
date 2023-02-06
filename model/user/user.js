const mongoose = require('../db/db.js');
const userSchema = require('./user.schema.js');
const UserModel = mongoose.model('User', userSchema);
const {ChatRoomModel} = require('../chatroom/chatRoom.js'); 

class UserRepository {

    static getById(_id) {

        return UserModel.findOne({id: _id});
    }

    static getManyById(_ids) {

        return UserModel.find({
            id: {
                $in: _ids
            }
        });
    }

    static getFriendsOf(_User) {

        return UserModel.find({
            id: {
                $in: _User.friends
            }
        });
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