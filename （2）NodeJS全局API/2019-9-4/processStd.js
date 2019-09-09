//stdin标准输入流。输出流 接收信息和输入信息
var i=0;
process.stdin.on("data",function(data){//接收键盘的输入
    i++;
    if(i==4){
        process.exit(process.pid);
    }
    else{
        console.log(data.toString());
    }
})