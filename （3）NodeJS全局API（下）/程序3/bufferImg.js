const http=require("http");
const fs=require("fs");
const path=require("path");

http.createServer(function(req,res){
    var imgPath=path.join(__dirname,"/1.jpg");
    var imgContent=fs.readFileSync(imgPath);
    var imgData=imgContent.toString("base64");
    var dataUri="data:image/jpg;base64,datauri";
    var htmlContent="<!DOCTYPE html><head></head>"+"<body><img src='"+dataUri+"'></body>"+"</html>";

    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(htmlContent);
    res.end();
}).listen(8082);
console.log("server is listening 8082");