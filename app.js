/**
 * application startup web instance
 */
var Koa = require('koa');

// Ensure we're in the project directory, so relative paths work as expected
// no matter where we actually lift from.
process.chdir(__dirname);


// --- main program ---
const app = new Koa();


// --- setting views engine
/*app.use(doT({
 path:['./views'],
 layout: true
 //interpolation: { start: '<%', end: '%>' }
 }));
 */


app.use((ctx, next) => {

    //this.state.title='Hello Home';
    //this.render('index');
});

app.use((ctx, next) => {
    const start = new Date();
    ctx.body = 'Hello Koa';
});

/*
 app.use( (ctx, next ) => {
 "use strict";
 const start = new Date();
 return next().then( () => {
 const ms = new Date() - start;
 console.log( '${ctx.method} ${ctx.url} - ${ms}ms' );
 });
 })




 */
/*
 app.use(function *() {
 this.body='Hello world';
 });

 app.use( function *(next) {
 var start = new Date();
 yield next;
 var ms = new Date() - start;
 this.set('X-Response-Time', ms + 'ms');
 });
 */


app.listen(3000);


/*
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(require('node-sass-middleware')({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: true,
    sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
 */
