/*Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that
value has more than one digit, continue reducing in
this way until a single-digit number is produced.
The input will be a non-negative integer.*/

//В процессе решения

function digital_root(n) {
    let intArr = n.toString().split("");
    let lengthArr = intArr.length;
    let newArr;




    const sumOfDigit = (arg) =>{
        let argArr = arg.toString().split("");
        let sum;
        for (let i = 0; i < argArr.length){
            sum += argArr[i];
        }
        return sum;
    }
}