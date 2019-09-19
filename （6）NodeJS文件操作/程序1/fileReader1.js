const http=require("http");
const path=require("path");
const fs=require("fs");

//自我
// http.createServer(function(req,res){
//     var fileName=process.argv[2];
//     var filePath=path.join(__dirname,"/"+fileName);
 
//     var exist=fs.existsSync(filePath);
//     if(exist==true){
//         fs.readFile(filePath,function(err,data1){
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log(data1.toString());
//                 res.write(data1.toString());
//                 res.end();
//             }
//         })
//     }
//     else{
//         console.log("该文件不存在");
//     }
// }).listen(8081);


var fileName=process.argv[2];

http.createServer(function(req,res){
    if(fileName==undefined){
        /**
         * fs.readFile()是一个异步方法，执行到该句不会等待
         * 文件读取完成，就直接执行后面的语句。
         * 回调函数是等到文件读取完成之后才执行
         */
        fs.readFile(process.argv[1],function(err,data){//读文件都为buffer数据
            if(err){
                console.log(err);
            }
            else{
                res.end(data.toString());
            }
        })
    }
    else{
        var pathName=path.join(__dirname,"/"+fileName);
        if(fs.existsSync(pathName)){
            fs.readFile(pathName,function(err,data){
                if(err){
                    console.log(err);
                }
                else{
                    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
                    res.end(data.toString());
                }
            })
        }
        else{
            console.log("文件不存在");
        }
    }
}).listen(8081);