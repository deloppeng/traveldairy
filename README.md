# 我的旅行日記
使用nodejs製作的網頁，主要是上傳照片並為它加上標題及內容作為旅行的記錄。
### 主要用到的模組及技術
  * 專案是以 node+express 建立的
  * node模組：multer 模組 （上傳用）
  
### 模組安裝
  * multer 模組
```
$ npm install --save multer
```

### multer 用法
```
var multer = require('multer');

//將上傳的檔案做名稱的更改
filename: function (req, file, cb) {
cb(null,Date.now()+"-"+file.originalname )
  }
})

var upload = multer({ storage: storage })

router.post('/post', upload.single('progressbarTWInput'), function (req, res, next)  {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any

  // 把POST過來的資料insert進DB
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
});
```

### 參考
* 上傳時預覽： https://progressbar.tw/posts/47
* multer 模組官方： https://www.npmjs.com/package/multer
