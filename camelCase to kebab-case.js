
const kebabize = (string) => {
    let str = string.replace(/[0-9]/g, '');

    let str2 = str.replace(/ +/g, ' ');

    return str2.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};
____________________
перевести стиль camelCase в kebab-case
____________________
function kebabize(str) {

    var nonumber = str.replace(/\d/g, '').split(/(?=[A-Z])/g);
    return nonumber.join('-').toLowerCase();
}
____________________
function kebabize(str) {
    return str.replace(/([A-Z])/g, "-$1").replace(/[0-9]/g, '').toLowerCase().replace(/^-/, '');
}
____________________