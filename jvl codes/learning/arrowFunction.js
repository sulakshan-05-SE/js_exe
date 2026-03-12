//normal function
function add(a,b){
    return a+b;
}

//arrow function
const addArrow = (a,b) => a+b;
console.log(addArrow(5,10));

//lexical this example
 const user={
    name:"sulakshan",
    normalFn:function(){
        setTimeout(function(){
            console.log("normal:"+this.name);
        },1000);
    },
    arrowFn:function(){
        setTimeout(()=>{
            console.log("arrow:"+this.name);
        },1000);
    }
 }

    user.normalFn();
    user.arrowFn();
