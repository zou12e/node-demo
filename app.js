const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const server = http.createServer(app);
server.listen(8080);

app.use(express.static('./html'));
// 使用body-parser 解析
app.use(bodyParser());

app.post('/post/data',function(req, res){
    console.log(req.body);
    console.log(req.body.name);
    console.log(req.body.age);
    res.status(200).json({code:0});
});