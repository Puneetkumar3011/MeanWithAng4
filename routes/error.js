var express = require('express');
var router = express.Router();
var app = express();

var ErrorModel = require('../models/error');

router.post('/', function (req, res, next) {
    console.log('Start: error post');
    console.log(req.body);
    var errModel = new ErrorModel({
        Message: req.body.Message,
        URL: req.body.URL,
        Location: req.body.Location,
        CreatedOn: new Date()
    });
    errModel.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'Error while saving (post) data in TaskError',
                error: err
            });
        }
        res.status(201).json({
            message: 'Error Inserted',
            response: result
        });
    });
    console.log('End: error post');
});

module.exports = router;