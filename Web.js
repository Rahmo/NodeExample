
var express = require('express');
var connect = require('connect');
var routes = require('./routes');
var http = require('http');
//Express gives a big func to use
var server = express()


//server.use(express.urlencoded());
// __dirname is a varialble environemnt that installed by node that refer to the current proj
server.set('views',__dirname );

//Whenever anyone calls the root as get request do the following 
server.get('/', function (req,res) {
    res.end('Hello From Rahmo"s express server ');
});

server.get('/dynamic', function (req,res){

server.post('/Hello', routes.Hello );
// you can use sendfile method or use the engine view ejs 
// its like return view( ) in .net    
res.render('dynamic.ejs');

});
server.listen('8989');

