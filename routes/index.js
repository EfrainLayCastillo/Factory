var express = require('express');
var router = express.Router();
// model BD mongodb
var noticias = require('../models/newsletter.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SadBoys - Store' });
});


router.route('/newsletter')
      .get(function(req, res){
        noticias.find({}, function(err, data){
          if (err) {
            console.log(String(err));
            res.redirect("/");
            return;
          }
          console.log(String(data));
          res.render('registros/noticias', {data:data});
        });
      })
      .post(function(req, res){
        var data = {
          email: req.body.email
        }
        var guardado = new noticias(data);

        guardado.save(function(err){
          if (err) {
            console.log(String(err));
          }else {
            console.log("Guardamos tu subscripcion");
            res.redirect('/#one');
          }
      });
    });
module.exports = router;
