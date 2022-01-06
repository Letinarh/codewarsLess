/*Return the number (count) of vowels in the given string.

    We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.*/

function getCount(str) {
    let vowelsCount = 0;
    let promeg;
    promeg = str.split("").filter(t => (t == "a" | t == "e" | t == "i" | t == "o" | t == "u") )
    vowelsCount = promeg.length;

    return vowelsCount;
}
/*
__________________
function getCount(str) {
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}
__________________
function getCount(str) {
    return str.replace(/[^aeiou]/gi, '').length;
}
__________________
function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
}
__________________*/