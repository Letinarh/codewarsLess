/*
A series or sequence of numbers is usually the product of a function and can either be infinite or finite.

    In this kata we will only consider finite series and you are required to return a code according to the type of sequence:

    Code	Type	Example
0	unordered	[3,5,8,1,14,3]
1	strictly increasing	[3,5,8,9,14,23]
2	not decreasing	[3,5,8,8,14,14]
3	strictly decreasing	[14,9,8,5,3,1]
4	not increasing	[14,14,8,8,5,3]
5	constant	[8,8,8,8,8,8]
You can expect all the inputs to be non-empty and completely numerical arrays/lists - no need to validate the data;
do not go for sloppy code, as rather large inputs might be tested.

    Try to achieve a good solution that runs in linear time; also, do it functionally,
    meaning you need to build a pure function or, in even poorer words, do NOT modify the initial input!*/

function sequenceClassifier(arr){
    let indicator = []

    for (let i = 0; i < arr.length-1; i++){
        if (arr[i] === arr[i+1]){
            indicator.push(0)
        }else if(arr[i] > arr[i+1]){
            indicator.push(-1)
        }else if(arr[i] < arr[i+1]){
            indicator.push(1)
        }
    }
    const compare1 = (x) => {
        return x === 0 | x === 1
    }
    const comparem1 = (x) => {
        return x === 0 | x === -1
    }

    if (indicator.filter(el => el === 0).length === indicator.length){
        return 5
    }else if(indicator.filter(el => el === 1).length === indicator.length){
        return 1
    }else if(indicator.filter(el => el === -1).length === indicator.length){
        return 3
    }else if(indicator.filter(comparem1).length === indicator.length){
        return 4
    }else if(indicator.filter(compare1).length === indicator.length){
        return 2
    }else return 0
}
___________________________________________________________________________
const UNORDERED = 0;
const STRICTLY_INCREASING = 1;
const NOT_DECREASING = 2;
const STRICTLY_DECREASING = 3;
const NOT_INCREASING = 4;
const CONSTANT = 5;

function sequenceClassifier(arr) {
    let increasing = false;
    let decreasing = false;
    let equal = false;

    arr.forEach((e, i) => {
        if (i > 0) {
            increasing |= e > arr[i-1];
            decreasing |= e < arr[i-1];
            equal |= e === arr[i-1];
        }
    });

    if (increasing && decreasing) return UNORDERED;
    if (increasing && !equal) return STRICTLY_INCREASING;
    if (increasing) return NOT_DECREASING;
    if (decreasing && !equal) return STRICTLY_DECREASING;
    if (decreasing) return NOT_INCREASING;
    return CONSTANT;
}
___________________________________________________________________________
function sequenceClassifier(arr) {
    let mask = 0b000
    //           ││└─ increasing
    //           │└── decreasing
    //           └─── has constant values
    for (let i = 0; i < arr.length - 1; ++i) {
        const a = arr[i]
        const b = arr[i + 1]
        if (a < b) {
            mask |= 0b001
        } else if (a > b) {
            mask |= 0b010
        } else {
            mask |= 0b100
        }
    }
    switch (mask) {
        case 0b001: return 1
        case 0b101: return 2
        case 0b010: return 3
        case 0b110: return 4
        case 0b100: return 5
        default: return 0
    }
}
___________________________________________________________________________
function sequenceClassifier(arr) {
    if (arr.every((num) => num === arr[0])) return 5
    if (arr.slice(1).every((num, i) => num > arr[i])) return 1
    if (arr.slice(1).every((num, i) => num >= arr[i])) return 2
    if (arr.slice(1).every((num, i) => num < arr[i])) return 3
    if (arr.slice(1).every((num, i) => num <= arr[i])) return 4
    return 0
}
___________________________________________________________________________