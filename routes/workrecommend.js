var express = require('express');
var router = express.Router();

var num;
var src;
var name;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('workrecommend',{
    num : 4,
    srcs : ["","","","","",""],
    name : 'xxxx',
    layout: 'index'
  });
});

module.exports = router;
