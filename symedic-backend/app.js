//Import modules
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cors = require('cors');
var index = require('./routes/index');
var app = express()
var cors = require('cors');
app.use(cors({credentials: true, origin: true}));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cookieParser());
app.use(logger('dev'));
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.set('port', process.env.PORT || 3001);

app.use(require('./routes/symptoms'));
app.use(require('./routes/bodylocation'));
app.use(require('./routes/diagnosis'));
app.use(require('./routes/doctors'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/* express.Router().get('/doctor-token/:token', function (req, res) {
    console.log(res);
    process.env.doctorToken = req.params.token;
   res.locals.doctorToken = req.params.token;
    return res.status(200).json({"success": process.env.doctorToken});
});

express.Router().get('/apimedic-token/:token', function (req, res) {
    //apiMedicToken
    process.env.apiMedicToken = req.params.token;
res.locals.apiMedicToken = req.params.token;
    return res.status(200).json({"success": process.env.apiMedicToken});
});
*/


// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
