const { users } = require('../db/db');

module.exports = {
    index(_req, res) {
        res.json(users);
    },
    show(req, res) {
        res.json(users[req.params.id] || { error: 'Resource not found.' })
    },
    destroy(_req, res, id) {
        var exists = id in users;
        if (exists) {
            res.json({ error: 'Resource not found.' })
        } else {
            delete users[id];
            res.status(206);
            res.json({ success: 'Resource deleted.' });
        }
    }
}