const express = require('express')
const path = require('path')

const app = express()
const FILES_DIR = path.join(__dirname, 'resources')

app.get('/', (_req, res) => {
  res.send(
    './<br/>' +
    '<ul>' +
    '<li><a href="/files/text_1.txt">text_1.txt</a></li>' +
    '<li><a href="/files/text_2.txt">text_2.txt</a></li>' +
    '<li><a href="/files/text_3.txt">text_3.txt</a></li>' +
    '<li><a href="/files/text_missing.txt">text_missing.txt</a></li>' +
    '</ul>'
  )
})

app.get('/files/:file(*)', (req, res, next) => {
  res.download(req.params.file, { root: FILES_DIR }, function (err) {
    if (!err) return;
    if (err.status !== 404) return next(err);

    res.statusCode = 404;
    res.send(`File '${req.params.file}' not found...`);
  })
})

module.exports = { app }