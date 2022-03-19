/*
A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number
of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcisstic:

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1652 (4 digits), which isn't:

1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
The Challenge:

    Your code must return true or false (not 'true' and 'false') depending upon whether the given number
    is a Narcissistic number in base 10. This may be True and False in your language, e.g. PHP.

    Error checking for text strings or other invalid inputs is not required, only valid positive
    non-zero integers will be passed into the function.*/

function narcissistic(value) {
    const VAL = value.toString().split("")
    const len = VAL.length
    let narc = 0

    for(let i = 0; i < len; i++){
        narc += Math.pow(+VAL[i], len)
    }
    return value === narc
}

/*
___________________________
function narcissistic( value ) {
    return ('' + value).split('').reduce(function(p, c){
        return p + Math.pow(c, ('' + value).length)
    }, 0) == value;
}
___________________________
function narcissistic( value ) {
    var remaining = value,
        digits = [],
        solution = 0;
    while (remaining > 0) {
        digits.push(remaining % 10);
        remaining = Math.floor(remaining / 10);
    }

    return value == digits.reduce(function(p,n) {
        return p + Math.pow(n,digits.length);
    },0);
}
___________________________
narcissistic = num => num.toString().split("").reduce(function(prev,el) { return prev + Math.pow(el, String(num).length)},0)  == num;
___________________________*/
