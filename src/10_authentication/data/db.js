'use strict'

const bcrypt = require('bcrypt');

// hack: for demo purpose. Do NOT do this in production.
let password = 'password'
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(password, salt);

var users = [];

users.push({ username: 'admin', password: hash });
users.push({ username: 'foo', password: hash });
users.push({ username: 'bar', password: hash });

module.exports = { users };