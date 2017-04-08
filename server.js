/**
 * Created by nqlong on 05-Apr-17.
 */
var express = require('express');
var app = express();
var bodyParse = require('body-parser');

app.use(bodyParse.json());
//app.use(require('./middleware/headers'));
app.use(function(req, res, next) {
    res.header('access-control-allow-origin', '*');
    res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE');
    res.header('access-control-allow-header', 'Origin, X-Requested-Width', 'Content-Type',
        'Accept', 'Authorization');
    next()});

// app.use(require('./middleware/validatesession'));
app.use(function (req, res, next) {
    var jwt = require('jsonwebtoken');
    var User = require('./models/user');
    var constants = {
        JWT_SECRET : 'This is a secret'
    };

    var sessionToken = req.headers.authorization;

    if (!req.body.user && sessionToken) {
        // jwt check
        jwt.verify(sessionToken, constants.JWT_SECRET, function (err, decodeId) {
            if (decodeId) {
                User.findOne({_id: decodeId}).then(function (user) {
                    req['user'] = user;
                    next();
                }, function (err) {
                    res.send(401, 'not authorized');
                })
            } else {
                res.send(401, 'not authorized');
            }
        });

    } else {
        next();
    }
});

app.use('/test', function (req, res) {
    res.send('Hello world');
});

app.use('/api/users', require('./routes/users'));
app.use('/api/login', require('./routes/sessions'));
app.use('/api/definitions', require('./routes/definition'));
app.listen(3000, function () {
    console.log('App is listening on port 3000... ');
});