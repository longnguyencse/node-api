/**
 * Created by nqlong on 05-Apr-17.
 */
var db = require('../config/db.js');

var UserSchema = db.Schema({
    username: {type: String, required: true},
    email: {type: String, required:true}
})