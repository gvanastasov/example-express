const express = require('express');

const { users_schema_v2 } = require('../data/db');

const api_v2 = express.Router();

api_v2.get('/users', (_req, res) => {
    res.json(users_schema_v2)
});

module.exports = api_v2;