var mongoose = require('mongoose');
//schema creation
var studentschema = mongoose.Schema({
    Name : String,
    Place : String,
    Age : Number,
    Department : String
})
//model creation
//collection name is student
var studentmodel = mongoose.model("student",studentschema);
//export the model
module.exports = studentmodel ;