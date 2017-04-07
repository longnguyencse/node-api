/**
 * Created by nqlong on 07-Apr-17.
 */
var db = require('../config/db.js');
var UserSchema = require('./user-schema');

var User = db.model('User', UserSchema);

module.exports = User;
