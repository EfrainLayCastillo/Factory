var express = require('express');
var router = express.Router();
// model BD mongodb
var User = require('../models/usersmodel');
/* GET home page. */

// ----------------------------RENDER---------------------------------------
//home
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CAFE CON SAL'});
});
//coffee
router.get('/coffee', function(req, res, next){
  res.render('coffee', {title: 'Coffee'});
});
router.get('/admin', function(req, res, next){
  res.render('admin', {title: 'Doggo Admin'});
});
router.get('/store', function(rq, res, next){
  res.render('store',{title: 'Doggo Admin'});
});

// ----------------------------CRUD---------------------------------------

router.post('/registro', function(req, res, next){
  var user_Info = {
    name: req.body.name,
    lastname: req.body.lastname,
    age: req.body.age,
    country: req.body.country,
    email: req.body.email,
    password: req.body.password
  }
  var saved = new User(user_Info);
  saved.save(function(err){
    if (err) {
      console.log(String(err));
    }else {
      console.log("User Registered");
      res.redirect("/coffee");
    }
  })
});
router.post('/iniciar', function(req, res, next){
  User.findOne({email: req.body.email, password: req.body.password}, function(err, user){
    if (!err) {
      req.session.user_id = {
        id: user._id,
        name: user.name,
        email: user.email
      };
      console.log("Inicio de sesion - nuevo usuario");
      console.log(user);
      res.redirect("/dashboard/home");
    }else {
      console.log(String("error en session" + err));
      res.redirect("/");
    }

  });
});

module.exports = router;
