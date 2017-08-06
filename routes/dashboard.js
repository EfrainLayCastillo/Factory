var express = require('express');
var router = express.Router();
// model BD mongodb
var User = require('../models/usersmodel');

//dashboard render

router.get('/home', function(req, res, next){
  res.render('dashboard/home', {title: 'Coffee'});
});
// ------------------------------- CRUD -----------------------------------
router.post('/userDelete', function(req, res, next){
  User.findOneAndRemove({_id:req.session.user_id.id}, function(err){
    if (!err) {
      res.redirect('/');
    }else {
      console.log(String(err));
    }
  });
});

module.exports = router;
