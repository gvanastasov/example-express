'use strict'

var users = require('./db');

const html = function(_req, res){
  res.send('<ul>' + users.map(function(user){
    return '<li>' + user.name + '</li>';
  }).join('') + '</ul>');
};

const text = function(_req, res){
  res.send(users.map(function(user){
    return ' - ' + user.name + '\n';
  }).join(''));
};

const json = function(_req, res){
  res.json(users);
};

module.exports = { html, text, json }