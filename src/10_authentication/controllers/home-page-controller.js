const { users } = require('../data/db')

module.exports = function(req, res) {
    res.render('home', {
        title: 'Authentication Example',
        header: 'Home Page'
    })
}