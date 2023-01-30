const jwt = require('josnwebtoken');
const bcrypt = require('bcrypt');
const {UserModel} = require('../model/user/user.js');

const jwt_algorithm ='RS256';
/**
 * 
 * request 
 */
async function login(request, response, next) {

    const {phone, password} = request.body;



    const user = await UserModel.findOne({
        phone: phone,
    }).exec()
    .catch((error) => {

        return NotFound(response);
    })
    

    if (user.session.isLogin) {

        return isLoggedIn(response);
    } 

    try {
        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch) {

            return notMatch(response);
        }

        const token = await generateToken(user);

        response.status(200);
        response.set({
            'Bearer': token
        })
        response.end();
    }
    catch(error) {

        response.status(500);
        response.end();
    }
}

async function auth(req, res, next) {

    const token = req.headers['Bearer'];

    if (!token) {
        notAuthenticated(res);
    }

    const secret = process.env.API_AUTH_KEY;

    try {
        const user_data = jwt.verify(token, secret, {algorithm: jwt_algorithm});

        req.userData = user_data;

        next();
    }
    catch(error) {

        switch(error.name) {
            case 'JsonWebTokenError':
                return notAuthenticated();
            case 'TokenExpiredError':
                return;
        }
    }
}

async function generateToken(_user) {

    const secret = process.env.API_AUTH_KEY;

    const token = jwt.sign( {
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: {
            id: _user.id
        }
    }, secret, {algorithm: jwt_algorithm});

    return token;
}

function NotFound(response) {

    response.status(404);
    response.end();  
}

function isLoggedIn(response) {

    response.status(409);
    response.end();
}

function notMatch(response) {
    
    response.status(404);
    response.end();
}

function notAuthenticated(response) {

    response.status(401);
    response.end();
}

module.exports = {login, auth};