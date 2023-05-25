const escapeHtml = require('escape-html');

module.exports = {
    list(req, res) {
        res.json(`show user ${ escapeHtml(req.params.userId) } games`);
    },
    get(req, res) {
        res.send(`show user ${ escapeHtml(req.params.userId) } game with id ${ escapeHtml(req.params.gameId) }`);
    },
    delete(req, res) {
        res.send(`deleted user ${ escapeHtml(req.params.userId) } game with id ${ escapeHtml(req.params.gameId) }`);
    }
}