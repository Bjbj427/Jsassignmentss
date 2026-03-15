
function myMap(arr, callback){
    let result = [];

    for(let i = 0; i < arr.length; i++){
        result.push(callback(arr[i]));
    }

    return result;
}

function double(num){
    return num * 2;
}

console.log(myMap([1,2,3], double));
