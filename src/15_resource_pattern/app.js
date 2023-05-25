const express = require('express')

const userController = require('./controllers/user-controller');
const { resource } = require('./lib/resource');

const app = express()
app.resource = resource;

app.resource('/users', userController);

app.use('/', (_req, res) => {
  res.send([
    '<h1>Users:</h1>'
    , '<ul>'
    , '<li><a href="/users">GET /users</a></li>'
    , '<li><a href="/users/1">GET /users</a></li>'
    , '<li><a href="/users/3">GET /users</a></li>'
    , '<li>DELETE /users/4</li>'
    , '</ul>'
  ].join('\n'));
});

module.exports = { app }