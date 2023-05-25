function authorize({ role }) {
    return function(req, _res, next) {
        if (req.principal.role === role) {
            next();
        } else {
            next(new Error('Unauthorized'));
        }
    }
}

module.exports = { authorize };
