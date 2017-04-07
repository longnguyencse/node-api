/**
 * Created by nqlong on 07-Apr-17.
 */


var db = require('../config/db');

var LogSchema = db.Schema({
    description: String,
    result: String,
    date: { type: Date, default: Date.now()},
    ower: {type: db.Schema.Types.ObjectId, ref: 'User'},
    Definition: {type: db.Schema.Types.ObjectId, ref: 'Definition'}
})