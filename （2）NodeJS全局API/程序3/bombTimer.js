function Bomb(){
    this.message="bomb!!";
}
Bomb.prototype.explode=function(){
    console.log(this.message);
}

var bomb=new Bomb();
setTimeout(bomb.explode.bind(bomb),2000);//this的指向改变了，this在嵌套的函数中,通过bind改变this指向