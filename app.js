const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const server = http.createServer(app);
server.listen(8080);

app.use(express.static('./html'));
// 使用body-parser 解析
app.use(bodyParser());


app.get('/get/data',function(req, res){
    console.log('----------------------get----------------------');
    console.log(req.query);
    console.log('name', req.query.name);
    console.log('age', req.query.age);
    res.status(200).json({code:0});
});


app.post('/post/data',function(req, res){
    console.log('----------------------post----------------------');
    console.log(req.body);
    console.log('name', req.body.name);
    console.log('age', req.body.age);
    res.status(200).json({code:0});
});