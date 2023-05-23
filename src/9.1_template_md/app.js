const express   = require('express'),
  escapeHtml    = require('escape-html'),
  fs            = require('fs'),
  { marked }    = require('marked'),
  path          = require('path');

const db        = require('./data/db');

const app = express()

app.engine('md', function(path, options, fn) {
  fs.readFile(path, 'utf8', function(err, str) {
    if (err) {
      return fn(err);
    }

    var html = marked(str, { mangle: false, headerIds: false }).replace(/\{([^}]+)\}/g, function(_, name){
      return escapeHtml(options[name] || '');
    });

    fn(null, html);
  })
})

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'md');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (_req, res) => {
  res.send(
    '<ul>' + 
      db.adrs.map(x => (`<li><a href="/${x.id}">${x.title}</a></li>`)).join("") +
    '</ul>')
})

app.get('/:id', (req, res, next) => {
  let { id } = req.params;
  let adr = db.adrs.find(x => x.id == id)
  if (adr) {
    res.render('adr', adr);
  } else {
    next();
  }
})

module.exports = { app }