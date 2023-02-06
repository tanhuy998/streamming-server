const Controller = require('../controller/baseController.js').proxy;

function requestDispatcher(controllerObject, controllerAction) {

    return function(req, res, next) {

        controllerObject.setContext(req, res, next);

        const req_params = req.params;

        const param_arr = [];

        for (const key in req_params) {

            param_arr.push(req_params[key]);
        }

        return controllerAction(...param_arr);
    }
}

module.exports = requestDispatcher;