function factorial(n) {
    let fak = 1;
    if (n < 0 || n > 12){
        throw new RangeError("Параметр должен быть от  0 до 12");
    }else { for (let i = 0; i < n; i++){
        fak = fak * (i + 1)
    }
    }
    return fak;
}

/*
____________________________________
найти факторал числа    Входные числа целые
сли число меньше 0 или больше 12   RangeError
____________________________________

factorial = n => {
    if (n < 0 || n > 12) throw RangeError;
    return n > 1 ? n * factorial(n - 1) : 1;
}
____________________________________*/
