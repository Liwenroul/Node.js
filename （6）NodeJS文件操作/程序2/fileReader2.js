const http=require("http");
const path=require("path");
const fs=require("fs");
var fileName=process.argv[2];
//自我
// http.createServer(function(req,res){
//     var fileName=process.argv[2];
//     var filePath=path.join(__dirname,"/"+fileName);
//     var exist=fs.existsSync(filePath);
//     if(exist==true){
//         fs.open(filePath,"r+",function(err,fd){
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 var buf=Buffer.alloc(30);
//                 var len=fs.statSync(filePath).size;
//                 fs.read(fd,buf,0,len,0,function(err,len,buf){
//                     if(err){
//                         console.log(err);
//                     }
//                     else{
//                         res.write(buf.toString());
//                     }
//                 })
//                 fs.close(fd,function(err){
//                     if(err){
//                         console.log(err);
//                     }
//                 });
//             }
//         })
        
//     }
//     else{
//         console.log("该文件不存在");
//     }
// }).listen(8082);

http.createServer(function(req,res){
    if(fileName==undefined){
        fs.open(process.argv[1],"r+",function(err,fd){//要用到fd,将这些操作写在该回调函数
            var statObj=fs.statSync(process.argv[1]);
            var buf=Buffer.alloc(statObj.size);
            fs.read(fd,buf,0,statObj.size,0,function(err,len,buf){
                if(err){
                    console.log(err);
                }
                else{
                    res.end(buf.toString());
                    fs.closeSync(fd);
                }
            })
        })
    }
    else{
        var pathName=path.join(__dirname,"/"+fileName);
        if(fs.existsSync(pathName)){
            fs.open(pathName,"r+",function(err,fd){
                var statObj=fs.statSync(pathName);
                var buf=Buffer.alloc(statObj.size);
                fs.read(fd,buf,0,statObj.size,0,function(err,len,buf){
                    if(err){
                        console.log(err);
                    }
                    else{
                        res.end(buf.toString());
                        fs.closeSync(fd);
                    }
                })
            })
        }
        else{
            console.log("文件不存在");
        }
    }
}).listen(8082);