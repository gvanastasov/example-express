const express   = require('express'),
  ejs           = require('ejs')
  path          = require('path');

const homePageController = require('./controllers/home-page-controller');

const app = express()

app.engine('.html', ejs.renderFile)

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', homePageController)

module.exports = { app }