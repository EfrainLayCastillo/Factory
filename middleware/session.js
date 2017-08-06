// model BD mongodb
var User = require('../models/usersmodel');

module.exports = function(req, res, next){
  if (!req.session.user_id) {
    res.redirect("/coffee");
  }else {
    User.findById(req.session.user_id.id, function(err, user){
      if (err) {
        console.log(err);
        res.redirect('/');
      }else {
        res.locals = {user:user};
        next();
      }
    });


  }
}
