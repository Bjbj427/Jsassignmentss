function reverseNumber(num){
    let reversed = 0;

    while(num > 0){
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }

    return reversed;
}

function isPalindrome(num){
    return num === reverseNumber(num);
}

console.log(isPalindrome(121)); 
console.log(isPalindrome(123)); 