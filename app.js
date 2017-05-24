var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var lessMiddleware = require('less-middleware');
//handlebars engine
var hbs = require('express-handlebars');
var mongoose = require('mongoose')
var index = require('./routes/index');
var users = require('./routes/users');
var app = express();

//DB server connection
var llave = "mongodb://efrainlay:bebeto23marzo@cluster0-shard-00-00-cfab5.mongodb.net:27017,cluster0-shard-00-01-cfab5.mongodb.net:27017,cluster0-shard-00-02-cfab5.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";
mongoose.connect(llave,  function(err, db){
    if (!err) {
      console.log("MongoBD Entrando");
    }else {
      console.log("Error de conexion");
    }

});


//Engine of Handlebars
app.engine('.hbs', hbs({
  extname:'.hbs',
  defaultLayout:'main',
  layoutsDir: __dirname + '/views/layouts',
  partialsDir: __dirname + '/views/partials'
  })
);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
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
