module.exports = function(req, res) {
    res.render('login', {
        title: 'Authentication Example',
        header: 'Login Page'
    })
}