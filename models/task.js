var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./user');

var schema = new Schema({
    id: {type: String},
    description: {type: String, required: true},
    taskStatus: {type: String, required: true},
    priority: {type: String, required: true},
    createdOn: {type: Date, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    household: {type: String, required: true}
});

module.exports = mongoose.model('Task', schema);