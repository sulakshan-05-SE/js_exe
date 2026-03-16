function add(a, b) {
    return a + b;
}

console.log(add(5, 7));

//2
 function square(num) {
    return num * num;
}
console.log(square(4));

//3
function oddEven(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
    
}
console.log(oddEven(15));
console.log(oddEven(7));

//4 greetin function
function greet(name){
    return "Hello " + name;
}

console.log(greet("sulakshan"));

//5 greatest number
function greatest(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(greatest(10, 20));

console.log(Math.max(10, 20));