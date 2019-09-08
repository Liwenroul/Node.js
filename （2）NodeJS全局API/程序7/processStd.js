var i=0;

process.stdin.on("data",function(data){
    if(i==0){
        console.log("name:");
        var m1=data.toString();
    }
    else if(i==1){
        console.log("email:");
        var m2=data.toString();
    }
    else if(i==2){
        console.log("qq:");
        var m3=data.toString();
    }
    else if(i==3){
        console.log("mobile:");
        var m4=data.toString();
    }
    else if(i==4){
        var user={
            name:m1,
            email:m2,
            qq:m3,
            mobile:m4
        }
        console.log(user);
        process.exit(process.pid);
    }
    i++;
})