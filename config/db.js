/**
 * Created by nqlong on 05-Apr-17.
 */
var db = require('mongoose');

db.connect('mongoose://test:test@10.11.12.1:27017/workouts');

module.exports = db;
