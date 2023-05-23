const { users } = require('../data/db')

module.exports = function(req, res) {
    res.render('home', {
        users: users,
        title: 'Template EJS Example',
        header: 'Home'
    })
}