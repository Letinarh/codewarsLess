var isSquare = function(n){
    let result;
    if (n < 0){
        result = false;
    } else if (n == 0){
        result = true;
    } else if ( Number.isInteger(Math.sqrt(n))) {
        result = true;
    } else { result = false}
    return result;
}
/*
___________________________________
Входящие целое число, определите, является ли оно квадратным числом: n  = a * a
___________________________________

function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
}
___________________________________
const isSquare = n => Number.isInteger(Math.sqrt(n));
___________________________________