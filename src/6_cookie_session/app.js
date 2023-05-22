const express         = require('express'),
  cookieSession       = require('cookie-session');

const app = express()

function countMiddleware(req, _res, next) {
  const documentRequest = req.headers.accept.includes('text/')
  if (documentRequest) {
    req.session.count = (req.session.count || 0) + 1
  }
  next();
}

app.use(cookieSession({ name: 'session', secret: 'secret' }))
app.use(countMiddleware);

app.get('/', (req, res) => {
  res.send('Website was viewed ' + req.session.count + ' times during current session.\n')
})

module.exports = { app }