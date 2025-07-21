function repeatdigitsum(n){
    while(n>=10){
        let sum = 0;
        while(n>0){
            let digit = n % 10;
            sum = sum + digit;
            n = Math.floor(n/10);
        }
        n = sum;
    }
    return n;
}

let result = repeatdigitsum(456);
console.log(" repeated sum of digits until there is only a single digit in the number is : ",result);