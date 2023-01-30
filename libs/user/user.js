const {UserModel} = require('../../model/user/user.js');


class User {

    #userId;
    #userModel;
    #socket;

    constructor(_id, _socket) {
        
        this.#userId = _id;
        this.#socket = _socket;

        this.#Init();
    }

    #Init() {

        
    }

    async retrieve() {

        const user = await UserModel.findOneAndUpdate({id: this.#userId})
                                            .where({isLogin: false})
                                            .exec();

        if (!user) 
    }

    #InitSocketEvent() {

        const socket = this.#socket;

        socket.on('message', )
    }
}

module.exports = User;