var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const ggv = require('./routes/ggVison')
const esign = require('./routes/esign')

const cors = require('cors');
const vision = require('@google-cloud/vision')
const mindee = require("mindee");



var app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/ggv', ggv)
app.use('/esign', esign)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

const client = new vision.ImageAnnotatorClient({
  keyFilename: './APIKey.json'
});

const detectText = async (file_path) => {

  let [result] = await client.textDetection(file_path);
  console.log(result.fullTextAnnotation.text);
};

// detectText('./anh_ielts.jpg');

module.exports = app;
