const http=require("http");
const fs=require("fs");
const path=require("path");

var server=http.createServer(function(req,res){//返回的就是server
    var htmlPath=path.join(__dirname,"/views/view.html");
    var htmlContent=fs.readFileSync(htmlPath);//读取文件为二进制
    htmlContent=htmlContent.toString("utf8");//将二进制转换为字符串
    console.log(htmlPath);
    res.writeHead(200,{"Content-Type":"text/html"});//http的响应头
    res.write(htmlContent);
    res.end();
});

server.listen(8080);
console.log("server is listening 8080");



// http.createServer(function(req,res){}).listen(8081);