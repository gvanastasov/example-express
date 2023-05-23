const express = require('express')

const app = express()

app.use('/api/v1', require('./controllers/api_v1'));
app.use('/api/v2', require('./controllers/api_v2'));

module.exports = { app }