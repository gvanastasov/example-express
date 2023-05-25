const express = require('express');

const { users } = require('./data/db');

const convertToInteger = function(req, _res, next, value, name) {
  if (isNaN(req.params[name])) {
    next(Error(`Invalid '${name}' parameter.`))
  }

  req.params[name] = parseInt(value, 10);
  next();
}

const loadRequestContextUser = function(req, _res, next, userId) {
  let isRange = userId.indexOf('-') !== -1;
  if (isRange) {
    next('route');
  }

  let user = users[userId];
  if (!user) {
    next(Error(`User ${userId} not found.`));
  }

  req.user = user;
  next();
}

const app = express()

app.param('userId', loadRequestContextUser);
app.param(['to', 'from'], convertToInteger)

app.get('/', (_req, res) => {
  res.send(
    'Users' +
    '<div><a href="/users/0">ID: 0</a></div>' +
    '<div><a href="/users/10">ID: 10</a></div>' +
    '<div><a href="/users/2-4">ID: 2-4</a></div>'
  );
});

app.get('/users/:userId', (req, res) => {
  res.send(
    'User:' +
    `<div>ID: ${req.params.userId}, Name: ${req.user.name}</div>` +
    '<div><a href="/">Back...</a></div>'
  );
});

app.get('/users/:from-:to', (req, res, next) => {
  var { from, to } = req.params;
  if (from < 0) {
    next(Error(`Invalid 'from' parameter.`));
  }

  if (to + 1 > users.length) {
    next(Error(`Invalid 'to' parameter.`));
  }

  var names = users
    .slice(from, to + 1).map(x => x.name).join(', ');
  
    res.send(
      `Users [${from}:${to}]:` +
      `<div>${names}</div>` +
      '<div><a href="/">Back...</a></div>'
    );
})

module.exports = { app }