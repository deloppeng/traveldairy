var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
/* GET upload page. */
router.get('/', function(req, res, next) {
  res.send('i am add page!')
});


var multer = require('multer'); //檔案上傳囉！！

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads')
  },
  //將上傳的檔案做名稱的更改
filename: function (req, file, cb) {
cb(null,Date.now()+"-"+file.originalname )
  }
})

var upload = multer({ storage: storage })

router.post('/post', upload.single('progressbarTWInput'), function (req, res, next)  {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any

  // DataBase
  var mysql = require("mysql");

  var conn = mysql.createConnection({
      host: "localhost",
      user: "product",
      password: "product",
      database: "picsys",
      port: 8889
  });
  // insert statment
  let sql = 'INSERT INTO pic(title,comment,path) VALUES("' + req.body.title + '","' + req.body.cm + '","' + req.file.filename + '")';

  // execute the insert statment
  conn.query(sql, function(err, rows) {
          if (err) {
              console.log(err);
          }
      });

  res.redirect('/')
})


module.exports = router;
