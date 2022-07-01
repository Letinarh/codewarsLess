function digitize(n) {
    return  n.toString().split("").reverse().map(e=>parseInt(e,10))
}

/*
_____________________
function digitize(n) {
    return Array.from(String(n), Number).reverse();
}
_____________________
function digitize(n) {
    return String(n).split('').map(Number).reverse()
}
_____________________*/
