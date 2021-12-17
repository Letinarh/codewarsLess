
function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}

function expandedForm(num) {
    let arr2 =[];
    let answ = "";
    let arr = num.toString().split("");
    if (arr.length == 1){
        answ = arr.toString();
    } else if(arr[arr.length - 1] == 0){


        for (let i = 0; i <= arr.length - 1; i++){
            arr2[i] = arr[i] * pow(10, arr.length - i - 1);
        }
        let last = arr[arr.length - 1];
        arr2.pop();
        let arr3 = arr2.filter(Number);
        answ = arr3.join(" + ") //+ " + " + last;



    } else {


        for (let i = 0; i <= arr.length - 1; i++){
            arr2[i] = arr[i] * pow(10, arr.length - i - 1);
        }
        let last = arr[arr.length - 1];
        arr2.pop();
        let arr3 = arr2.filter(Number);
        answ = arr3.join(" + ") + " + " + last;

    }
    return answ;

}

expandedForm(5040604);
/*
_____________________
expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
_____________________
expandedForm = n => [...String(n)].reverse().map((x,i) => x == '0' ? '' : x + '0'.repeat(i)).filter(x => x != '').reverse().join(' + ')
_____________________
function expandedForm(num) {
    return String(num)
        .split("")
        .map((num, index, arr) => num + "0".repeat(arr.length - index -1 ))
        .filter((num) => Number(num) != 0)
        .join(" + ")
}
_____________________
var expandedForm = (num) => {
    var arr = num.toString().split('').reverse();
    var result = [];
    for(var i = 0; i < arr.length; i++){
        arr[i] == 0 ? result.push() : result.push(arr[i] + ('0'.repeat(i)))
    }
    return result.reverse().join(' + ')
}

