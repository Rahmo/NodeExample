/* Low level server */


// Load the modules 
//Nodes ways to load modules 
var http = require('http');

// as the function return a server object
var server = http.createServer(function (req,res) {
console.log(req.url);

//debugger; 
//this request is good and we have a response 
res.writeHead(200,{
 'Content-Type': 'text/html'
});
res.write('<p>  Whats up from Rahmo </p>    <h1> I see stars </h1>');

//Closing the response
res.end();
})
server.listen(8881);


// Run in Terminal the command (Node server.js) then go to the port and will show the server
// each we change in the code we have to stop the server
// Node debuge server.js 
//it will stop at the debugger line in the code.
// req.header while debugging will show the header of the Request.
