var express = require('express');
var router = express.Router();

var TAForum = require('./../db/TAForum_schema.js');

home = function(req, res, next) {
    var query = {user: req.body.user, password: req.body.password};
    TAForum.userlist.count(query, function(err, doc){
        if (doc==1) {
            var findResult = TAForum.userlist.find(function(error, result){
                if (error) {
                    res.send(error);
                }else{
                    res.render('home', {
                        title : '后台',
                        status: doc,
                        username : query.user,
                        adminlist : result,
                        date : new Date()
                    });

                }
            });
        }else{
            res.render('home', {
                title : '后台',
                status: doc,
            });
            res.redirect('/');
        }
    });
}

router.post('/',home)

module.exports = router;
