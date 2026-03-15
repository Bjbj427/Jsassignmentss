function add(a,b){
return a + b;
}

function subtract(a,b){
return a - b;
}

function multiply(a,b){
return a * b;
}

function divide(a,b){
return a / b;
}

function calculate(num1, num2, operation){
return operation(num1, num2);
}

console.log(calculate(10,4,add));
console.log(calculate(15,7,subtract));
console.log(calculate(6,9,multiply));
console.log(calculate(20,5,divide));