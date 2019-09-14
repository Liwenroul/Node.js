var c={};
function circumference(r){
    return 2*r*Math.PI;
}
function area(r){
    return r*r*Math.PI;
}
c.circumference=circumference(2);
c.area=area(2);
module.exports={
    c:c
}