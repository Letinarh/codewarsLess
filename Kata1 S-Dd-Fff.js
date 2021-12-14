
//my sollusion
function accum(s) {
    let str = s;
    let row = "";
    let count;
    for (let i = 0; i < s.length - 1;i++){
        row += str[i].toUpperCase() + (str[i].toLowerCase()).repeat(i) + " ";
        count = i+1;
    }
    row += str[count].toUpperCase() + (str[count].toLowerCase()).repeat(count)
    return row;
}


//best like sollution
function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}



//2-nd like
function accum (s) {
    return [...s].map((element, index) => {
        return element.toUpperCase() + element.toLowerCase().repeat(index);
    }).join('-');
}