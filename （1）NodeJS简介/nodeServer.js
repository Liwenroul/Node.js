//该文件相当于服务端，浏览器相当于客户端（url）

const http=require("http");
//实例化server,创建服务端，响应请求
var server=new http.Server();

//server监听客户端的请求
server.on("request",function(req,res){
    //res.end("hello world");
    res.write(200,{"Content-Type":"text/html"});//(200为状态码，对象)
    res.write("<h1>hello world<h1>");//可以识别响应的HTML标记
    res.end();//响应的结束(若没有，响应没结束)
})

server.listen(8082);//server监听端口
console.log("server is listening 8082");



/*
    1.新建终端要将执行文件夹添加到工作区
    2.cd 路径：到达路径
    3.http协议：
        （1）协议结构：状态行、请求头、请求正文
        （2）协议的请求响应过程：客户端向服务端发送一个请求，服务端则以状态行作为响应。
    4.状态码：也指错误代码，指为服务器所接收每个请求（网页点击）分配的3位数代码。
*/
