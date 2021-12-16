function solution(nums){
    let result;
    let empty = [];
    if (!!nums){
        result = nums.sort((a, b) => a - b);
    } else result = empty;
    return result;
}
/*
____________________
Сортировать массив чисел по возрастанию
если массив (NULL)  или []   return []
____________________
function solution(nums){
    if(nums===null)
        return [];
    return nums.sort(sortNum);
}

function sortNum(a,b) {
    return a - b;
}
____________________
function solution(nums){
    return (nums || []).sort(function(a, b){
        return a - b
    });
}