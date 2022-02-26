/*
Stop gninnipS My sdroW!

Write a function that takes in a string of one or more words, and returns the same string,
but with all five or more letter words reversed (Just like the name of this Kata).
Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
spinWords( "This is a test") => returns "This is a test"
spinWords( "This is another test" )=> returns "This is rehtona test"*/

function spinWords(string){

    const reverseStr = (a)=>{
        let arr = a.trim().split("")
        let arrRes=[]
        for (let i = arr.length-1; i >= 0; i--){
            arrRes.push(arr[i])
        }
        return arrRes.join('')
    }

    let primeArray = string.split(" ")

    for (let i = 0; i < primeArray.length; i++) {
        if (primeArray[i].length >= 5){
            primeArray[i]= reverseStr(primeArray[i])
        }
    }

    return primeArray.join(" ")
}


/*
__________________________________________________________________
function spinWords(words){
    return words.split(' ').map(function (word) {
        return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
}
__________________________________________________________________
function spinWords(string){
    return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
}
__________________________________________________________________
function spinWords(str){
    return str.split(' ').map( w => w.length<5 ? w : w.split('').reverse().join('') ).join(' ');
}
__________________________________________________________________
function spinWords(str){
    return str.split(' ').map(spinSingleWord).join(' ');
}

function spinSingleWord(word) {
    return word.length > 4 ? word.split('').reverse().join('') : word;
}
__________________________________________________________________*/
