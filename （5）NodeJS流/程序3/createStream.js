const stream=require("stream");
const util=require("util");
// var read=new stream.Readable();

function MyReadable(){
}
MyReadable=stream.Readable;

var my=new MyReadable();
for(var i=0;i<26;i++){
    my.push(String.fromCharCode(97+i));
}
my.push(null);
my.pipe(process.stdout);