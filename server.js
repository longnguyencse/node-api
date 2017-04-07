/**
 * Created by nqlong on 05-Apr-17.
 */
var express = require('express');
var app = express();


app.use('/test', function (req, res) {
    res.send('Hello world');
});

app.listen(3000, function () {
    console.log('App is listening on port 3000... ');
});