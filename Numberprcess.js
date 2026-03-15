function double(num){
    return num * 2;
}

function square(num){
    return num * num;
}

function half(num){
    return num / 2;
}

function processNumber(num, callback){
    return callback(num);
}

console.log(processNumber(5, double)); 
console.log(processNumber(5, square)); 
console.log(processNumber(10, half));  