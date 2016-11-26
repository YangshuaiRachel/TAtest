//link to TAForum db
var mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://127.0.0.1:27017/TAForum');
//show errors
db.on('error',function(error){
  console.log(error);
});
//schema 结构
var Schema = mongoose.Schema;
var userlistSchema = new Schema({
  user      : {type : String},
  password  : {type : String}
});

//关联　TAForum -> admins 表
exports.userlist = db.model('admins',userlistSchema);
exports.db = db;
