//Write missing codes here
var mongoose = require('mongoose');
const schema = mongoose.Schema({
  title: String,
  content: String,
  img_url: String,
});

//Write missing codes here
var blogmodel = mongoose.model("schema",schema);
module.exports = blogmodel ;
