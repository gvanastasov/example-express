const bcrypt = require('bcrypt');

const { users } = require('../data/db')

function authenticate(username, password, callback) {
    const user = users.find(x => x.username === username)

    if (!user) {
        callback('Invalid username or password.', null)
        return;
    }

    bcrypt.compare(password, user.password, function(err, valid) {
        if (valid) {
            callback(null, user);
        } else {
            callback('Invalid username or password.', null);
        }
    })
}

module.exports = { authenticate }