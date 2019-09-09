/**
 * 1.传入命令行参数，是一个算术运算式 1*2+3
 * 2.程序将算术运算式计算得到结果，并且在控制台输出 1*2+3； eval()(计算结果)
 * 3.程序判断一下是否传入了命令参数，如果没有传入，控制算出，“命令行参数错误”
 */

//自己练习
//  var end=0;
//  if(process.argv[2]!=undefined){
//      console.log(process.argv[2]);
//      end=eval(process.argv[2]);
//      console.log(end);
//  }
//  else if(process.argv[2]==undefined){
//      console.log("命令行参数错误");
//  }

var arg1=process.argv[2];
if(arg1==undefined){
    console.log("命令行参数错误");
}
else if(arg1=="-help"){
    console.log("帮助：命令参数虚伪算术运算式");
}
else{
    var result=eval(arg1);
    console.log(arg1+"=%s",result);
}