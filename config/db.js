/**
 * Created by nqlong on 05-Apr-17.
 */
var db = require('mongoose');

db.connect('mongodb://127.0.0.1:27017/workouts');

module.exports = db;
