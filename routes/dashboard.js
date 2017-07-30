var express = require('express');
var router = express.Router();

//dashboard render

router.get('/home', function(req, res, next){
  res.render('dashboard/home', {title: 'Coffee'});
});


module.exports = router;
