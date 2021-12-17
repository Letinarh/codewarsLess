function arithmetic(a, b, operator){
    switch (operator) {
        case "add":
            return a + b;
            break;
        case "subtract":
            return a - b;
            break;
        case "multiply":
            return a * b;
            break;
        case "divide":
            return a / b;
            break;
    }
}
/*
______________________________
const arithmetic = (a, b, operator) => ({
    'add'     : a + b,
    'subtract': a - b,
    'multiply': a * b,
    'divide'  : a / b
}[operator]);
______________________________
function arithmetic(a, b, operator){
    optable = { "add":"+", "subtract": "-", "multiply": "*" , "divide":"/"};
    return eval(a + optable[operator] + b);
}
______________________________