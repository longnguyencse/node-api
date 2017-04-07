/**
 * Created by nqlong on 05-Apr-17.
 */

var router = require('express').Router();

var bcrypt = require('bcryptjs');

var User = require('../models/user');

var jwt = require('jsonwebtoken');
var constants = require('../config/constants');

router.post('/', function (req, res) {
    // user = { username: 'foo', email: 'blah@cheese.com', pah: 'blah'}
    var user = new User({
        username: req.body.user.username,
        email: req.body.user.email,
        passhash: bcrypt.hashSync(req.body.user.pwd, 10)
    });

    user.save().then(
        function (newuser) {
            var sessionToken = jwt.sign(newuser._id, constants.JWT_SECRET, {expiresIn: 60 * 60 * 24});

            res.json({
                user: newuser,
                message: 'success ',
                sessionToken: sessionToken
            });

        },
        function (err) {
            res.send(500, err.message);
        });
});

module.exports = router;