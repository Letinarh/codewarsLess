/*
Numerical Palindrome #1


A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

    2332
110011
54322345

For a given number num, write a function to test if it's a numerical palindrome or not and return a boolean (true if it is and false if not).

Return "Not valid" if the input is not an integer or less than 0.

*/


function palindrome(num) {
    if(num <= 0 || !Number.isInteger(num)){
        return "Not valid"
    }else{
        let x = ("" + num)
        console.log("X = " + x)
        let y = [...x.split("")].reverse().join("")
        console.log("Y = " + y)
        return x === y
    }
}

_______________________________________________
const palindrome = n => {
    if (typeof n !== 'number' || n < 0) return "Not valid"
    return String(n).split('').reverse().join('') === String(n)
}
_______________________________________________
function palindrome(num) {
    if (typeof num !== 'number' || num < 0){ return 'Not valid';}
    return num - Number(num.toString().split('').reverse().join('')) === 0 ? true : false;
}
_______________________________________________
const palindrome = num =>
    Number.isInteger(num) && num >= 0 ? [...`${num}`].reverse().join(``) == num : `Not valid`;
_______________________________________________
