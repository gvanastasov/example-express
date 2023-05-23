const express = require('express');

const { users_schema_v1 } = require('../data/db');

const api_v1 = express.Router();

api_v1.get('/users', (_req, res) => {
    res.json(users_schema_v1)
});

module.exports = api_v1;