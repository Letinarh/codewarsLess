/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

    Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false*/

function XO(str) {
    let res = false
    let xCount = 0
    let oCount = 0
    let arr = str.split("")

    for (let i = 0; i < arr.length ; i++) {
        if (arr[i].toLowerCase() === "x") {
            xCount += 1;
        } else if (arr[i].toLowerCase() === "o") {
            oCount += 1;
        }
    }

    console.log(arr)
    console.log("xCount= " + xCount)
    console.log("oCount= " + oCount)

    if (xCount === oCount) {
        return true
    }

    return res
}

/*
____________________________
function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
}
____________________________
function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}
____________________________
const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}
____________________________*/
