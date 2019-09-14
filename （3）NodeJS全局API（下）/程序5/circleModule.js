//自我
// var ci={};
// function circleFun(r){
//     var circumference=function(){
//         ci.circumference=2*Math.PI*r;
//     }
//     var area=function(){
//         ci.area=r*r*Math.PI;
//     }
//     circumference();
//     area();
//     console.log(ci);
// }
// module.exports={
//     circleFun:circleFun
// }


function circleFun(r){
    function circumference(){
        return 2*Math.PI*r;
    }
    function area(){
        return r*r*Math.PI;
    }
    return {circumference:circumference,area:area};
}
module.exports={
    circleFun:circleFun
}

