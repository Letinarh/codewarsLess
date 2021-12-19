

/*  Your goal in this kata is to implement a difference function,
    which subtracts one list from another and returns the result.
    It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
arrayDiff([1,2,2,2,3],[2]) == [1,3]
    */

function arrayDiff(a, b) {

    for (let i = 0; i <b.length; i++) {
        a = a.filter(function(ele){ return ele != b[i]})
    }
    return a;
}
_________________________________________
function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
}
_________________________________________
