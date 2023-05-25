const express     = require('express');

const { map }     = require('./lib/map'),
  userController  = require('./controllers/user-controller'),
  gameController  = require('./controllers/game-controller');

const app = express()
app.map = map;

// todo: this can easily get really ugly. Can be further optimized
// via schema relations and resource pattern. Imagine interface
// { type: 'user' }.withMany('games') which builds the mapping below.
app.map({
  '/users': {
    get: userController.list,
    delete: userController.delete,
    '/:userId': {
      get: userController.get,
      '/games': {
        get: gameController.list,
        '/:gameId': {
          get: gameController.get,
          delete: gameController.delete
        }
      }
    }
  }
});

app.use('/', (_req, res) => {
  res.send([
    '<h1>Users:</h1>'
    , '<ul>'
    , '<li><a href="/users">GET /users</a></li>'
    , '<li><a href="/users/1">GET /user with id 1</a></li>'
    , '<li><a href="/users/1/games">GET user 1\'s games</a></li>'
    , '<li><a href="/users/1/games/2">GET user 1\'s game with id 2</a></li>'
    , '</ul>'
  ].join('\n'));
});

module.exports = { app }