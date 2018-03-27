var express = require('express');
var app = express();
var fs = require('fs');

app.get('/', (req, res) => res.send(fs.readFileSync('data.txt','utf-8')));

app.listen(3000, () => console.log('Listening server'));