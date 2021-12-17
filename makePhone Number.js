/*Создайте номер телефона вида "(111) 111-1111"
входной массив 10 цифр] */

function createPhoneNumber(numbers){
    return "(" + numbers[0] + numbers[1] + numbers[2] + ") " + numbers[3] + numbers[4] + numbers[5] + "-" + numbers[6] + numbers[7] + numbers[8] + numbers[9]
}
_____________________________
function createPhoneNumber(numbers){
    var n = numbers;
    return '('+n[0]+n[1]+n[2]+') '+n[3]+n[4]+n[5]+'-'+n[6]+n[7]+n[8]+n[9];
}
_____________________________
function createPhoneNumber(numbers){
    return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}
_____________________________
function createPhoneNumber(numbers){
    return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
}
_____________________________