const express = require('express');

const { users } = require('./db/db');

const { loadUser }      = require('./middleware/principal'),
  { currentPrincipal }  = require('./middleware/authenticated'),
  { authorize }         = require('./middleware/authorized');

const app = express()

/**
 *  @description authenticate the first user in the dataset.
 */
app.use((req, _res, next) => {
  req.principal = users[0];
  next();
});

app.get('/', (_req, res) => {
  res.send([
    '<h1>Middlewares:</h1>'
    , '<ul>'
    , '<li><a href="/users/0">GET /users/0</a></li>'
    , '<li><a href="/users/1">GET /users/1</a></li>'
    , '<li><a href="/users/0/edit">GET /users/0/edit</a></li>'
    , '<li><a href="/users/1/edit">GET /users/1/edit</a></li>'
    , '<li><a href="/admin/users/1/edit">GET /admin/users/1/edit</a></li>'
    , '</ul>'
  ].join('\n'));
});

app.get('/users/:id', loadUser, (req, res) => {
  res.send(
    `User: ${req.user.name} </br>` +
    `<a href="/">Back...</a>`
  );
})

app.get('/users/:id/edit', loadUser, currentPrincipal, (req, res) => {
  res.send(
    `User Edit: ${req.user.name} </br>` +
    `<a href="/">Back...</a>`
  );
})

app.get('/admin/users/:id/edit', loadUser, authorize({ role: 'admin' }), (req, res) => {
  res.send(
    `User Edit: ${req.user.name} </br>` +
    `<a href="/">Back...</a>`
  );
})

module.exports = { app }