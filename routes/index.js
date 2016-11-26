var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('homepage',{
    srcs : ["www.baidu.com","","","","",""],
    layout: 'index'
  });
});

module.exports = router;
