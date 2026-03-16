function greet(name="Guest"){
    console.log("Hello "+name);
}
greet('Sulakshan');
greet();

//rest parameters
function sum(...numbers){
    return numbers.reduce((x,y) => x+y, 0);
}
console.log(sum(1,2,3,4,5));
