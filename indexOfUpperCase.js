var capitals = function (word) {
    let str = word.split("")
    let strUp = word.toUpperCase().split("")
    let ind = [];
    for (let i = 0; i < str.length; i++){

        if (str[i] == strUp[i]){ind.push(i)}
    }
    return ind;
};
capitals("HelLluYY")
________________________
вывести индксы Заглавных букв
________________________