console.log("Hi");


function isEven(n) {
    if (n % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

// let result = isEven(10);
// console.log(result);

// function isPrime(n){
//     for (let i = 2; i <= (n/2); i++){
//         if (n % i == 0){
//             return false;
//         }
//     }
//     return true;
// }
// let n = 12;
// result = isPrime(n);
// console.log(result);
// console.log(`The number ${n} is prime : ${result}`);


//// Pattern printing 

// * 
// * * 
// * * *
// * * * *
// * * * * *

for (let i=1; i<= 5; i++){
    let row = ""
    for (let j=1; j <= i ; j++){
        row += "* ";
    }
    console.log(row);
}

for (let i=1; i<=5 ; i++){
    console.log("* ".repeat(i));
}

stars = 1;
while (stars <= 5){
    console.log("* ".repeat(stars));
    stars += 1;
}

// do while
// executes a block of code regardless of condition.
// repeats it based on condition

let x = 2;
do {
    console.log("Yeay")
    x += 1;
}
while (x == 3)

// Type casting

// Implicit - JS converts datatypes during certain operations

let n1, n2;

n1 = 2; 
n2 = "4";

let result = n1 + n2; // n2 is converted to string

console.log(`The result of adding ${n1} and ${n2} is ${result} 
    and is of datatype ${typeof result}.`)

n1 = "2";
n2 = 2;
console.log(n1 * n2); // n1 is converted to number

console.log(n1 / n2); 

// This automatic or implicit conversion is called coercion.

// Explicity
n1 = "2.5";
n2 = "3.5";

n1 = Number(n1);
n2 = parseFloat(n2);
console.log(typeof n1);
console.log(n1 + n2);

n1 = 1000
n2 = 2000

n1 = n1.toString()
n2 = n2.toString()
console.log(n1 + n2);

// Falsey values

let value = Boolean(0)
console.log(value);

value = Boolean('')
console.log(value);

value = Boolean(NaN)
console.log(value);

value = Boolean(null)
console.log(value);

value = Boolean(undefined)
console.log(value);

// Truthy values

value = Boolean(true);
console.log(value);

value = Boolean(1);
console.log(value);

value = Boolean('0');
console.log(value);

value = Boolean([]);
console.log(value);

value = Boolean({});
console.log(value);
function f(){};
value = Boolean(f);
console.log(value);

value = Boolean('false');
console.log(value);

// Exception handling

// syntax

try {
    // code block which might throw exceptions.
}

catch(error){
    // code block to execute with the exception thrown...
}

finally{
    // optional code block to run eitherway, i.e., even if exception is thrown or not.
    // Used mainly for cleanup
}


try {
    result = x + t123;
    console.log(result);
}

catch(error){
   console.log(typeof error);
   if (error instanceof ReferenceError){
    console.warn("This was a reference error...");
   }
   console.error(error.message);
   
}

finally{
    console.log("This code will run anyways...")
}

// Some Built-in Errors

// ReferenceError - Invalid variable reference(undeclared)
// TypeError - Wrong type operation
// SyntaxError - Invalid Syntax 
// RangeError - Out of range value
// EvalError - Incorret usage of eval() function

function divide(a, b){
    if (b === 0){
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

try {
    result = divide(10, 0);
    console.log(result);
}
catch (error) {
    console.error(error.message);
    alert("Following error occured " +  error.message);
}