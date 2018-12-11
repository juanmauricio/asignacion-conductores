var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/asignacion-conductores', { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('Conexión exitosa!'))
  .catch((err) => console.error(err));

var apiRouter = require('./src/server/routes/conductor-routes');
var apiRouterVehiculo = require('./src/server/routes/vehiculo-routes');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/asignacion-conductores')));
app.use('/', express.static(path.join(__dirname, 'dist/asignacion-conductores')));
app.use('/conductor', apiRouter);
app.use('/vehiculo', apiRouterVehiculo);

// Captura el error 404 y lo maneja.
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send(err.status);
});

module.exports = app;