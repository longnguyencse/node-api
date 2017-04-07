/**
 * Created by nqlong on 07-Apr-17.
 */

var jwt = require('jsonwebtoken');
var User = require('../models/user');
var constants = require('../config/constants');

module.exportes = function (req, res, next) {
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
};