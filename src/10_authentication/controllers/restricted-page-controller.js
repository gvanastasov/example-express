module.exports = function(_req, res) {
    res.render('restricted', {
        title: 'Authentication Example',
        header: 'Restricted'
    })
}