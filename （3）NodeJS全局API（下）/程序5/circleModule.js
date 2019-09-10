
var ci={};
function circleFun(r){
    var circumference=function(){
        ci.circumference=2*Math.PI*r;
    }
    var area=function(){
        ci.area=r*r*Math.PI;
    }
    circumference();
    area();
    console.log(ci);
}
module.exports={
    circleFun:circleFun
}