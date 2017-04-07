/**
 * Created by nqlong on 07-Apr-17.
 */

var router = require('express').Router();

var LogSchema = require('../models/log');

router.get('/', function (req, res) {
    Log.find({ower: req.user}).then(function (logs) {
        res.json(logs)
    });
});

// api/logs/byDef
// router.get('/byDef', function (req, res) {
//     Log.find({ower: req.user, definition: req.body.definition}).then(function (logs) {
//         res.json(logs)
//     });
// });

router.post('/', function (req, res) {
   var log = new Log({
       description: req.body.log.description,
       result: req.body.log.result,
       date: req.body.log.date,
       ower: req.user,
       definition: req.body.definition
   });

    log.save().then(function (log) {
        res.json({
            message: 'saved',
            log: log
        });
    });
});

router.put('/:id', function (req, res) {
    Log.findOne({_id: req.params.id, owner: req.user}).then(function (log) {
        log.result = req.body.log.result;
        log.description = req.body.log.description;
        log.definition = req.body.definition;
        
        log.save().then(function (log) {
            res.json({
                message: 'update',
                log: log
            });
        });
        
    });
} );


router.delete('/:id', function (req, res) {
    Log.findOne({_id: req.params.id, ower: req.user}).then(function (log) {
        log.remove().then(function () {
            res.json(({
                message: 'deleted',
                log: log
            }));
        });
    });
    
});