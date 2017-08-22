var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    Message: {type: String, required: true},
    CreatedOn: {type: Date, required: true},
    URL: {type: String},
    Location: {type: String}
});

module.exports = mongoose.model('Error', schema);