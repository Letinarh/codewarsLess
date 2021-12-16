function solution(string) {
    return string.replace(/([A-Z])/g, ' $1').trim()
}
/*
_____________________
добавить пробелы между словами. в строке CamelCase
_____________________
function solution(string) {
    string = string.split('').map(function (el) {
        if (el === el.toUpperCase()) {
            el = ' ' + el
        }
        return el
    })
    return string.join('')
}
_____________________
function solution(string){
    return string.replace(/[A-Z]/g, function(c){return " " + c;});
}
_____________________
function solution(text) {
    return text.split(/(?=[A-Z])/).join(' ');
}