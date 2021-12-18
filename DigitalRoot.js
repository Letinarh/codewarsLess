/*Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that
value has more than one digit, continue reducing in
this way until a single-digit number is produced.
The input will be a non-negative integer.*/

//В процессе решения

function digital_root(n) {

    let intArr = n.toString().split("");
    let k = n;
    let lengthArr = intArr.length;
    let newArr;
    while (sumOfDigit(k) > 9 ){
        k = sumOfDigit(k)
    }
    let z = sumOfDigit(k);
    return z;
}

function sumOfDigit(arg) {
    let argArr = arg.toString().split("");
    let sum = 0;
    for (let i = 0; i < argArr.length; i++){
        sum += Number(argArr[i]);
    }
    return sum;
}
/*
________________
function digital_root(n) {
    return (n - 1) % 9 + 1;
}________________
function digital_root(n) {
    if (n < 10) return n;

    return digital_root(
        n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
}
________________
function digital_root(n) {
    return--n%9+1;
}
________________