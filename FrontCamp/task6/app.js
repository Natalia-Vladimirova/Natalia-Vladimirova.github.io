let express = require('express');
let session = require('express-session');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let less = require('less-middleware');
let multer  = require('multer');
let config = require('./config/index');
let mustAuthenticatedMw = require('./middlewares/must-authenticated');
let passport = require('./helpers/passport-helper');

require('./helpers/mongoose-helper')();

let index = require('./routes/index');
let articles = require('./routes/articles');
let auth = require('./routes/auth');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: config.get('auth:secret') }));
app.use(passport.initialize());
app.use(passport.session());

app.use(less(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use(multer({
    dest: path.join(__dirname, 'public', 'images'),
    rename: function (fieldname, filename) {
        return filename.replace(/\W+/g, '-').toLowerCase() + Date.now();
    }
}).single('image'));

app.all('/secure/articles/create', mustAuthenticatedMw);
app.all('/secure/articles/update', mustAuthenticatedMw);
app.all('/secure/articles/delete', mustAuthenticatedMw);

app.use('/', index);
app.use('/secure/articles', articles);
app.use('/auth', auth);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
