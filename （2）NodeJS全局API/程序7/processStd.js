
var obj={};
var message=["Name","Email","QQ","Mobile"];
var i=1;

console.log(message[0]+":");
process.stdin.on("data",function(data){//事件 process.stdin.on()一直输入一直获取
    obj[message[i-1]]=data.toString("utf8");
    if(i==4){
        console.log(obj);
        process.exit();
    }
    else{
        console.log(message[i++]+":");
    }
})