function findOdd(A) {



    for (let i = 0; i < A.length; i++) {
        if (A.count(A[i]) % 2 !== 0){
            return A[i];
        }
    }

}


/*
Object.defineProperties(Array.prototype, {
    count: {
        value: function(value) {
            return this.filter(x => x==value).length;
        }
    }
});
_____________________________
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
_____________________________
function findOdd(A) {
    var obj = {};
    A.forEach(function(el){
        obj[el] ? obj[el]++ : obj[el] = 1;
    });

    for(prop in obj) {
        if(obj[prop] % 2 !== 0) return Number(prop);
    }
}
_____________________________
function findOdd(arr) {
    return arr.find((item, index) => arr.filter(el => el == item).length % 2)
}_____________________________
// Cool one liner using ES6
const findOdd = A => A.filter(x => A.filter(v => x === v).length % 2 === 1).reduce(a => a);
_____________________________