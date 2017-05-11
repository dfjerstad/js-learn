/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var express = require('express');
var app = express();

console.log(__dirname);

app.use('/cssFiles', express.static(__dirname + '/assets'));


app.get('/hello', function (request, response) {
    response.send('Hello there from Express!');
});

app.listen(1337, function() {
    console.log('Listening at port 1337');
});