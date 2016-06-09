// Load the modules 
//Nodes ways to load modules 
var http = require('http');

// as the function return a server object
var server = http.createServer(function (req,res) {


console.log(req.url);
//this request is good and we have a response 
res.writeHead(200,{
 'Content-Type': 'text/html'
});
res.write('<p>  Whats up from Rahmo </p>');

//Closing the response
res.end();
})
server.listen(8881);


// Run in Terminal the command (Node server.js) then go to the port and will show the server
// each we change in the code we have to stop the server

