const escapeHtml = require('escape-html');

module.exports = {
    list(_req, res) {
        res.json('show users list');
    },
    get(req, res) {
        res.send(`show user with id: ${ escapeHtml(req.params.userId) }`);
    },
    delete(req, res) {
        res.send(`deleted user with id: ${ escapeHtml(req.params.userId) }`);
    }
}