function twoSum(numbers, target) {
    let result = [];
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++){
            if (numbers[i] + numbers[j] == target){
                result[0] = i;
                result[1] = j;
            }
        }
    }
    return result;
}
/*
_____________________________________
функция принимает массив чисел и целевое число
Найдите два элемента массива  сумма которых дает целевое число
Функция должна возвращать индексы двух элементов
_____________________________________
function twoSum(numbers, target) {
    for (var i = 0; i < numbers.length-1; i++) {
        for (var j = i+1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) return [i, j];
        }
    }
}_____________________________________
function twoSum(nums,target){
    const arr = [];
    nums.map(function(x,ind1){
        nums.map(function(y,ind2){
            if(x + y == target && ind1 != ind2)
                arr.push(ind1,ind2)
        });
    });
    return [arr[0],arr[1]]
}
_____________________________________
twoSum=(n,t,r)=>[r=n.indexOf(n.filter(u=>n.includes(t-u))[0]),n.lastIndexOf(t-n[r])]
