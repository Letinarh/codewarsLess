function solution(number){
    let x = number;
    let sum = 0;
    if (x <= 0){
        return 0;
    }else {
        for (let i = 3; i < x; i++){
            if (((i % 3) == 0) || ((i % 5) ==0)){
                sum += i;
            }
        }
    }
    return sum;
}
________________________________________
дано натуральное число number
найдите сумму всех чисел кратных 3 или 5  (от нуля до number)
  ________________________________________
function solution(number){
    return number < 1 ? 0 : [...new Array(number).keys()].filter(n => n % 3 == 0 || n % 5 == 0).reduce((a, b) => a + b);
}
________________________________________
solution = n => {
    let s = 0;
    for (let i = 0; i < n; i++) s += i % 3 ? i % 5 ? 0 : i : i;
    return s;
}
________________________________________