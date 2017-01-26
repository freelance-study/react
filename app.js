var express = require('express');

var app = express();
app.use(express.static('./'));

var port = 3000;
app.listen(port, ()=> {
  console.log('Expressサーバー起動');
});
