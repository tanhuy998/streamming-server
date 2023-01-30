function requestDispatcher(_Callback) {

    return function(req, res, next) {

        const req_params = req.params;

        const param_arr = [];

        for (const key in req_params) {

            param_arr.push(req_params[key]);
        }

        _Callback(...param_arr, req, res, next);
    }
}

module.exports = requestDispatcher;