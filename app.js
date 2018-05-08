const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const request = require('request');
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


app.post('/post/server', function (req, res) {
    const data = {
        "task_id": 135,
        "channel_ids": "2,3,4",
        "category_id1": 4,
        "category_id2": 4,
        "category_id3": 4,
        "category_id4": 4,
        "keywords": "美妆33,彩妆33",
        "near_rules": [
            {
                "keywords": "香奈儿3,香奈尔,夏奈尔,CHANEL,C家,香家,小香,双C,香奶奶,香奈鹅",
                "left_length": 20,
                "right_length": 20
            },
            {
                "keywords": "面部,脸部",
                "left_length": 15,
                "right_length": 15
            }
        ],
        "expnear_rules": [
            {
                "keywords": "美团22",
                "left_length": 20,
                "right_length": 20
            }
        ]
    };
    var options = {
        url: 'http://120.24.174.30:8082/crawler_admin/task',
        method: "POST",
        json: true,
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(data)
    };
    var urlres = {};
    request(options, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            console.log('body',body);
            res.status(200).json(body);
        } else {
            console.error('err', error);
        }
    
    });
    
});