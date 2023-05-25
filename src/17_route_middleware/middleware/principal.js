const { users } = require('../db/db');

function loadUser(req, _res, next) {
    let user = users[req.params.id];
    if (!user) {
        return next(new Error('User not found.'));
    }

    req.user = user;
    next();
}

module.exports = { loadUser }