var express = require('express');
var app = express();
var fs = require('fs');

app.get('/update', function(req, res) {
    fs.appendFile('data.txt', JSON.stringify(req.query)+"\n", function (err) {
        if (err) throw err
        console.log("%j", req.query)
        res.end(JSON.stringify(req.query)+" data received")
    });
});

app.listen(8080, () => console.log('Listening on port 8080'));