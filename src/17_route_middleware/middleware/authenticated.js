function currentPrincipal(req, _res, next) {
    if (req.principal.id === req.user.id) {
        next();
    } else {
        next(new Error('Unauthorized.'));
    }
}

module.exports = { currentPrincipal };
