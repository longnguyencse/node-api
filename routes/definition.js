/**
 * Created by nqlong on 07-Apr-17.
 */
var router = require('express').Router();
var Definition = require('../models/definition');

router.get('/', function (req, res) {
        Definition.find({ower: req.user}).then(
            function (definitons) {
                res.json(definitons);
            }
        )

});

// create a new definition:
router.post('/', function (req, res) {
    var def = new Definition({
        ower: req.user,
        logType: req.body.definition.type,
        description: req.body.description
    });

    def.save().then(function(definition){
        res.json({
            message: 'saved',
            definition: definition
        });
    });
});

// update a existion definition
router.put('/:id', function (req, res) {
   Definition.findOne({_id: req.params.id, owner: req.user}).then(function (definition) {
       definition.logType = req.body.definition.logType;
       definition.description = request.body.definition.description;

       definition.save().then(function (definition) {
            res.json({
                message: 'updated!',
                definition: definition
            });
       });
   });
});

// delete a definition

router.delete('/:id', function (req, res) {
   Definition.findOne({_id: req.params.id, owner: req.user}).
       then(function (definition) {
           definition.remove().then(function () {
               res.json({
                   message: 'delete',
                   definition: definition
               });
           });
   });

});

module.exports = router;



