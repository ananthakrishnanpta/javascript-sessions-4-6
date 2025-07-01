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

function isPrime(n){
    for (let i = 2; i <= (n/2); i++){
        if (n % i == 0){
            return false;
        }
    }
    return true;
}
let n = 12;
result = isPrime(n);
console.log(result);
console.log(`The number ${n} is prime : ${result}`);

