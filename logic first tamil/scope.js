// Global Scope
let name = "Ravi";
console.log("Global variable:", name);

// Function Scope
function test() {
    let age = 20;
    console.log("Function scope variable:", age);
}

test();

// Block Scope
{
    let city = "Colombo";
    console.log("Block scope variable:", city);
}
