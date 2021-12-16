function likes(names) {
    let long = names.length;
    let result = "";
    switch (long) {
        case 0:
            result = "no one likes this";
            break;
        case 1:
            result = names[0] + " likes this";
            break;
        case 2:
            result = names[0] + " and " + names[1] + " like this";
            break;
        case 3:
            result = names[0] + ", " + names[1] + " and " + names[2] + " like this";
            break;
        default:
            result =names[0] + ", " + names[1] + " and " + `${long - 2}` + " others like this";
            break;
    }
    return result;
}
/*

____________________________
отобразить имена тех кто лайкнул в следующем виде:
    []                                -->  "no one likes this"
    ["Peter"]                         -->  "Peter likes this"
    ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
    ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
    ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
____________________________


function likes(names) {
    names = names || [];
    switch(names.length){
        case 0: return 'no one likes this'; break;
        case 1: return names[0] + ' likes this'; break;
        case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
        case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
        default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
    }
}
____________________________

function likes (names) {
    var templates = [
        'no one likes this',
        '{name} likes this',
        '{name} and {name} like this',
        '{name}, {name} and {name} like this',
        '{name}, {name} and {n} others like this'
    ];
    var idx = Math.min(names.length, 4);

    return templates[idx].replace(/{name}|{n}/g, function (val) {
        return val === '{name}' ? names.shift() : names.length;
    });
}