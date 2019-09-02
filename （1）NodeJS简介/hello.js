//方式一：
const http=require("http");

var server=http.createServer(function(req,res){//回调函数(请求对象，响应对象)
    res.write("hello world");
    res.end();
});

server.listen(8081);
console.log("server is listening 8081");


//执行代码
/*
    1.找到文件的所在本地地址，shift+鼠标右键，点击在此处打开
    2.编译node.js文件：node 文件名
    3.每次修改js文件，需要重新执行：node 文件名（Ctrl+C退出，上箭头复制上一语句）
    4.在node中的js文件必须得编译才可
    5.WebStore（开发工具）
    6.浏览器地址栏localhost:8081 响应内容
*/