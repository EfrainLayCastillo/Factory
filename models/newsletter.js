var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;
var newsletter = new Schema({
  email:{type:String, required: true}
});
module.exports = mongoose.model('noticias', newsletter);
