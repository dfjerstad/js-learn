/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var http = require('http');
var server = http.createServer(engine);

server.listen(1337, function(){ 
    //things
    console.log('Server was hit by a Request');
});


//server.createServer(engine).listen(1337);

function engine(request, response) {
    
    //console.log(response);
    response.writeHead(200, {'Content-Type': 'text/plain',
    "Other-Type": "Asomething"});
    
    response.end('Hey there, from the Server! :O Request from page \'' + request.url + '\'');
    
}