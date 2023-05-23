const express   = require('express'),
  ejs           = require('ejs'),
  path          = require('path'),
  session       = require('express-session');

const homePageController    = require('./controllers/home-page-controller')
  restrictedPageController  = require('./controllers/restricted-page-controller'),
  loginPageController       = require('./controllers/login-page-controller');

const authenticated = require('./middleware/restrict');
const { authenticate } = require('./services/authentication');

const app = express()

app.engine('.html', ejs.renderFile)

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }))
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'secret',
}));

// todo: should use router instead...
app.get('/', homePageController);
app.get('/restricted', authenticated, restrictedPageController);
app.get('/login', loginPageController);

app.post('/login', function(req, res, next) {
  const { username, password } = req.body;
  authenticate(username, password, function(err, user) {
    if (err) {
      return next(err);
    }

    if (user) {
      const location = req.originalUrl === '/login' ? '/' : 'back'
      req.session.regenerate(() => {
        req.session.user = user;
        res.redirect(location);
      })
    } else {
      res.redirect('/login');
    }
  });
});

app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

module.exports = { app }