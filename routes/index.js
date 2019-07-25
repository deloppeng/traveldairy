var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  // DataBase
  var mysql = require("mysql");

  var conn = mysql.createConnection({
      host: "localhost",
      user: "product",
      password: "product",
      database: "picsys",
      port: 8889
  });

//   // 建立連線後不論是否成功都會呼叫
//   conn.connect(function(err){
//   if(err) throw err;
//   console.log('connect success!');
//   });
//   // 其他的資料庫操作，位置預留
//   // 關閉連線時呼叫
//   conn.end(function(err){
//   if(err) throw err;
//   console.log('connect end');
// });
var data = "";
conn.query('SELECT * FROM pic', function(err, rows) {
        if (err) {
            console.log(err);
        }
        var data = rows;

        // use index.ejs
        res.render('index', {  data: data});
    });

});



router.get('/db', function(req, res, next) {
  // DataBase
  var mysql = require("mysql");

  var conn = mysql.createConnection({
      host: "localhost",
      user: "product",
      password: "product",
      database: "picsys",
      port: 8889
  });

//   // 建立連線後不論是否成功都會呼叫
//   conn.connect(function(err){
//   if(err) throw err;
//   console.log('connect success!');
//   });
//   // 其他的資料庫操作，位置預留
//   // 關閉連線時呼叫
//   conn.end(function(err){
//   if(err) throw err;
//   console.log('connect end');
// });
var data = "";
conn.query('SELECT * FROM pic', function(err, rows) {
        if (err) {
            console.log(err);
        }
        var data = rows;

        // use test.ejs
        res.render('test', { title: 'Account Information', data: data});
    });


});

module.exports = router;
