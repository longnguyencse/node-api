/**
 * Created by nqlong on 07-Apr-17.
 */

var db = require('../config/db');

var DefinitionSchema = require('./definition-schema');

var Definition = db.model('Definition', DefinitionSchema);

module.exports = Definition;

