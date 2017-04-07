/**
 * Created by nqlong on 07-Apr-17.
 */

var db = require('../config/db');

var DefinitionSchema = db.Schema({
    logType: String,
    description: String,
    ower: { type: db.Schema.Types.ObjectId, ref: 'User'}
});

module.exports = DefinitionSchema;

