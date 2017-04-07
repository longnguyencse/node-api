/**
 * Created by nqlong on 05-Apr-17.
 */
var express = require('express');
var app = express();
var bodyParse = require('body-parser');

app.use(bodyParse.json());
app.use(require('./middleware/headers'));
app.use(require('./middleware/validatesession'));

app.use('/test', function (req, res) {
    res.send('Hello world');
});

app.use('/api/users', require('./routes/users'));
app.use('/api/login', require('./routes/sessions'));
app.use('/api/definitions', require('./routes/definition'));
app.listen(3000, function () {
    console.log('App is listening on port 3000... ');
});