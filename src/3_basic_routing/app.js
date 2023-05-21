const express = require('express')

const app = express();

['get', 'post', 'patch', 'put', 'delete'].forEach(verb => {
    app[verb]('/', (_req, res) => {
        res.send(verb);
    });
});

module.exports = { app }