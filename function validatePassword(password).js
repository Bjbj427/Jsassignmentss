function validatePassword(password){

    if(password.length < 8){
        return false;
    }

    let hasNumber = false;
    let hasUpper = false;

    for(let i = 0; i < password.length; i++){

        if(password[i] >= '0' && password[i] <= '9'){
            hasNumber = true;
        }

        if(password[i] >= 'A' && password[i] <= 'Z'){
            hasUpper = true;
        }
    }

    return hasNumber && hasUpper;
}

console.log(validatePassword("Hello123")); 
console.log(validatePassword("hello"));   