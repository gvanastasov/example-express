const express   = require('express'),
  cookieParser  = require('cookie-parser');

const app = express()

app.use(cookieParser('secret'));
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  if (req.cookies.remember) {
    res.send('Remembered.<br/><a href="/forget">Forget me...</a>')
  } else {
    res.send(
      '<form method="post"><label>' +
      '<input type="checkbox" name="remember"/> Remember</label> ' +
      '<input type="submit" value="Submit"/></form>')
  }
})

app.post('/', (req, res) => {
  const minute = 60000;
  if (req.body.remember) {
    res.cookie('remember', 1, { maxAge: minute })
  }
  res.redirect('back');
})

app.get('/forget', (_req, res) => {
  res.clearCookie('remember');
  res.redirect('back');
})

module.exports = { app }