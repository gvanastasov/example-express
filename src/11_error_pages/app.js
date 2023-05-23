const express   = require('express'),
  ejs           = require('ejs')
  path          = require('path');

const app = express()

app.engine('.html', ejs.renderFile)

app.enable('verbose errors');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (_req, res) => {
  res.render('home', {
    title: 'Error Pages'
  })
})

const ERR_TITLES = {
  403: 'Not allowed',
  404: 'Not found',
  500: 'Internal server error',
  formatted(code) {
    return `${code} - ${this[code]}`
  }
}

/**
 * @description assuming we didnt not found what we need
 * to route, we simply try next handler.
 */
app.get('/404', (_req, _res, next) => {
  next();
})

/**
 * @description manually triggering a custom 4xx
 * error.
 */
app.get('/403', function(_req, _res, next){
  var err = new Error("You must be authenticated to visit this page.");
  err.status = 403;
  next(err);
});

/**
 * @description passing error to final handler from anywhere,
 * as internal default error handler (see latest middleware downbelow).
 */
app.get('/500', (_req, _res, next) => {
  next(new Error('Ops, something went wrong...'));
});

/**
 * @description last middleware when no route found and no error is thrown.
 */
app.use(function(req, res){
  res.status(404);

  res.format({
    html: function () {
      res.render('error', {
        title: 'Error Pages',
        error: {
          title: ERR_TITLES.formatted(404),
          message: `Requested url ${req.url} does not exist...`
        }
       })
    },
    json: function () {
      res.json({ error: ERR_TITLES[404] })
    },
    default: function () {
      res.type('txt').send(ERR_TITLES[404])
    }
  })
});

/**
 * @description last middleware, when error is thrown.
 */
app.use(function(err, _req, res, _next){
  let status = err.status || 500;
  res.status(status);
  res.render(
    'error', 
    { 
      title: 'Error Pages',
      error: {
        title: ERR_TITLES.formatted(status),
        message: err.message,
        stack: err.stack,
      } 
    }
  );
});

module.exports = { app }