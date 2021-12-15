const reverseWords = (s) => {

    let arr = s.split(" ");
    let arr2 = [];
    for (let i = 0;i < arr.length; i++){
        arr2[i] = arr[i].split("").reverse().join("")
    }
    let arr3 = arr2.join(" ");
    return arr3;
}
/* reverseWords ("Say hello your optimism");

__________________________________________________
var reverseWords = (str) => str.split(" ").map(word => word.split('').reverse().join('')).join(" ")

__________________________________________________
function reverseWords(str) {
    // Go for it
    //split words into seperate arrays
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
}