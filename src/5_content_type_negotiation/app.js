const express = require('express')

const app = express()

/**
 * @description Content-Type negotiation handler resolver.
 * 
 * @param {String} path relative location to content negotiation handler.
 * @returns {express.RequestParamHandler}
 */
function format(path) {
  const obj = require(path);
  return function(_req, res) {
    res.format(obj);
  }
}

app.get('/users', format('./users'));

module.exports = { app }