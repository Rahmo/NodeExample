module.exports.Hello = function (req   ,res){
var name = req.body.name;
res.send('Hello ',+ name )
};
