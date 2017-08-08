var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var app = express();

var User = require('../models/user');
var TaskModel = require('../models/task');

router.get('/', function (req, res, next) {
    var decoded = jwt.decode(req.query.token);
    var resTaskList;
    TaskModel.find({ household: decoded.user.household })
        .populate('user', 'firstName')
        .exec(function (err, resData) {
            if (err) {
                return res.status(500).json({
                    title: 'Error in getting data from Task table',
                    error: err
                });
            } else{
                resTaskList = updateTaskId(resData);
            }
            res.status(200).json({
                message: 'Success',
                data: resTaskList
            });
        });
});

router.get('/:id', function (req, res, next) {
    TaskModel.findById(req.params.id, function (err, savedTask) {
        if (err) {
            return res.status(500).json({
                title: 'Error while retrieving data for given id from Task table',
                error: err
            });
        }
        if (!savedTask) {
            return res.status(500).json({
                title: 'data not found for given id in Task table',
                error: {savedTask: 'data not found for given id in Task table'}
            });
        }
        res.status(200).json({
                message: 'Success',
                data: savedTask
        });
    });
});

router.post('/', function (req, res, next) {
    var decoded = jwt.decode(req.query.token);    
    User.findById(decoded.user._id, function (err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }

        var taskModel = new TaskModel({
        description: req.body.description,
        taskStatus: req.body.taskStatus,
        priority: req.body.priority,
        createdOn: new Date(),
        user: user,
        household: decoded.user.household
        });
        taskModel.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'Error while saving (post) data in Task',
                    error: err
                });
            }
            res.status(201).json({
                message: 'Task Created',
                response: result
            });
        });
    });
});

router.patch('/:id', function (req, res, next) {
    TaskModel.findById(req.params.id, function (err, savedTask) {
        if (err) {
            return res.status(500).json({
                title: 'Error while retrieving data for given id in Task table',
                error: err
            });
        }
        if (!savedTask) {
            return res.status(500).json({
                title: 'data not found for given id in Task table',
                error: {savedTask: 'data not found for given id in Task table'}
            });
        }
        // set data to save
        savedTask.description = req.body.description;
        savedTask.taskStatus = req.body.taskStatus;
        savedTask.priority = req.body.priority;
        savedTask.save(function(err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'Error while saving (patch) data in Task',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Task Updated',
                obj: result
            });
        });
    });
});

router.delete('/:id', function(req, res, next) {
    TaskModel.findById(req.params.id, function (err, savedTask) {
        if (err) {
            return res.status(500).json({
                title: 'Error while retrieving data for given id in Task table',
                error: err
            });
        }
        if (!savedTask) {
            return res.status(500).json({
                title: 'data not found to delete for given task in Task table',
                error: {savedTask: 'data not found to delete for given task in Task table'}
            });
        }
        savedTask.remove(function(err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'Error while saving (patch) data in Task',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Task Deleted',
                obj: result
            });
        });
    });
});

function updateTaskId(tasks){
    if(tasks && tasks.length > 0){
        for(var i = 0; i < tasks.length; i++){
            tasks[i].id = tasks[i]._id;
        }
    }
    return tasks;
}

module.exports = router;
