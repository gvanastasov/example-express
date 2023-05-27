const express   = require('express'),
  morgan        = require('morgan'),
  fs            = require('fs'),
  path          = require('path');

var logsDirectory = path.resolve(__dirname, './logs');

if (!fs.existsSync(logsDirectory)){
    fs.mkdirSync(logsDirectory);
}

var accessLogStream = fs.createWriteStream(path.join(logsDirectory, 'access.log'), { flags: 'a' })

const app = express()

app.use(morgan('dev', {
  skip: function (_req, res) { return res.statusCode < 400 }
}));

app.use(morgan('combined', { stream: accessLogStream }));

app.get('/', (_req, res) => {
  res.send('Hello World!')
})

module.exports = { app }