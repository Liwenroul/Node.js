const http=require("http");

http.createServer(function(req,res){
    var dataStr="";
    req.on("data",function(chunk){
        dataStr+=chunk;
    })
    req.on("end",function(){
        console.log(dataStr);
    })
}).listen(8081);