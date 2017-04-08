/**
 * Created by nqlong on 07-Apr-17.
 */
var router = require('express').Router();

var bcrypt = require('bcryptjs');

var jwt= require('jsonwebtoken');

var constants = {
    JWT_SECRET : 'This is a secret'
};


router.post('/', function (req, res) {
    User.findOne({username: req.body.user.username}).then(
        function (user) {
            if (user) {
                bcrypt.compare(req.body.user.pwd, user.passhash, function (err, matches) {
                    if (matches) {
                        var sessionToken = jwt.sign(user._id, constants.JWT_SECRET, {expriesIn: 24*60*60})
                        res.json({
                            user : user,
                            message: 'succesfully authed',
                            sessionToken: sessionToken
                        })
                    } else {
                        res.json({
                            user: {},
                            message: 'failed to auth',
                            sessionToken: ''
                        });
                    }
                })
            } else {
                res.json({
                    user: {},
                    message: 'failed to auth',
                    sessionToken: ''
                })
            }
        },
        function (err) {
            // could not find user
            res.json(err);
        }
    )
});

module.exports = router;