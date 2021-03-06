var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var users_schema = new Schema({
  name:{type:String, required: true},
  lastname:{type: String, required: true},
  age: {type: String, required:true},
  country: {type: String, required:true},
  email:{type: String, required:true},
  password:{type:String, required:true}
});
module.exports = mongoose.model('user', users_schema);
