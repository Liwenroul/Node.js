//自我
// const circle=require("./circleModule.js");
// console.log(circle);
// circle.circleFun(2);

const circleModule=require("./circleModule.js");//就是一个对象
var r=process.argv[2];//可通过命令行传入参数
var circleObj=circleModule.circleFun(r);
console.log("圆的周长"+circleObj.circumference());
console.log("圆的面积"+circleObj.area());

