const express = require('express');
const path = require('path');
// Commenting Out until useful
const expressLayouts = require('express-ejs-layouts');
const expressValidator = require('express-validator');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// const passport = require('passport');
// const session = require('express-session');
const PORT = process.env.PORT || 5000;

// Make use of environment variables defined in .env
if ( process.env.NODE_ENV === 'development' ||
     process.env.NODE_ENV === 'production') {
  require('dotenv').config();
}

// Declare Express App
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(expressLayouts);

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.static(path.join(__dirname, 'public')));

// Routers 
const index = require('./routes/index');
const about = require('./routes/about');

// Middleware for routes
app.use('/', index);
app.use('/about', about);

// Passport Initialize
// app.use(passport.initialize());
// app.use(passport.session());

// Express Validator - Taken from Middleware Options on Github
app.use(
  expressValidator({
    errorFormatter: function (param, msg, value) {
      let namespace = param.split('.'),
        root = namespace.shift(),
        formParam = root;

      while (namespace.length) {
        formParam += '[' + namespace.shift() + ']';
      }

      return {
        param: formParam,
        msg: msg,
        value: value
      };
    }
  })
);

// catch 404 and forward to error handler
app.use(function (req, response, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, response, next) {
  // set locals, only providing error in development
  response.locals.message = err.message;
  response.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  response.status(err.status || 500);
  response.render('error');
});

module.exports = app;