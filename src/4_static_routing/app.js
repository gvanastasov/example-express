const express = require('express')
const path = require('path');

const app = express()

app.get('/', (_req, res) => {
  res.send('Hello World!')
})

app.use('/static', express.static(path.join(__dirname, 'public')))

module.exports = { app }