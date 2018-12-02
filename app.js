const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const expressValidator = require('express-validator');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const passport = require('passport');
const session = require('express-session');

// Make use of environment variables defined in .env
if (process.env.NODE_ENV === 'development' ||
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
app.enable('trust proxy');
app.use(
  session({
    store: new(require('connect-pg-simple')(session))(),
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    proxy: true,
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      secure: app.get('env') != 'development'
    }
  })
);

// Passport Initialize
app.use(passport.initialize());
app.use(passport.session());
app.use((request, response, next) => {
  response.locals.isAuthenticated = request.isAuthenticated();
  next();
});

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

// Flash Messages
app.use(flash());

app.use(function (request, response, next) {
  response.locals.success_msg = request.flash('success_msg');
  response.locals.error_msg = request.flash('error_msg');
  response.locals.error_msg = request.flash('error');
  response.locals.user = request.user || null;
  next();
});

// Routers 
const index  = require('./routes/index');
const about  = require('./routes/about');
const search = require('./routes/search');
const post   = require('./routes/post');
const admin  = require('./routes/admin');
const signup = require('./routes/signup');
const user   = require('./routes/user');
const login  = require('./routes/login');
const logout = require('./routes/logout');
const resetpassword = require('./routes/resetpassword');
const create = require('./routes/create');

// Middleware for routes
app.use('/', index);
app.use('/about', about);
app.use('/search', search);
app.use('/post', post);
app.use('/admin', admin);
app.use('/signup', signup);
app.use('/user', user);
app.use('/login', login);
app.use('/logout', logout);
app.use('/resetpassword', resetpassword);
app.use('/create', create);

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