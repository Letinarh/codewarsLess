/*
Valid Braces

Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.*/

function validBraces(braces){
    let scanner = []
    for(let i=0;i < braces.length; i++){
        if ( braces[i] === "(" || braces[i] === "{" || braces[i] === "["){
            scanner.push(braces[i])
        } else{
            if(scanner.length === 0) return false
            let lastValue = scanner[scanner.length-1]
            if( (braces[i] === ']' && lastValue === '[') || (braces[i] === '}' && lastValue === '{') || (braces[i] === ')' && lastValue === '('))
            {
                scanner.pop()
            } else {
                break;
            }
        }
    }
    return scanner.length === 0
}


/*_________________________________________________
function validBraces(braces){
    var matches = { '(':')', '{':'}', '[':']' };
    var stack = [];
    var currentChar;

    for (var i=0; i<braces.length; i++) {
        currentChar = braces[i];

        if (matches[currentChar]) { // opening braces
            stack.push(currentChar);
        } else { // closing braces
            if (currentChar !== matches[stack.pop()]) {
                return false;
            }
        }
    }

    return stack.length === 0; // any unclosed braces left?
}
_________________________________________________
function validBraces(braces){
    while(/\(\)|\[\]|\{\}/g.test(braces)){braces = braces.replace(/\(\)|\[\]|\{\}/g,"")}
    return !braces.length;
}
_________________________________________________
function validBraces(braces){
    while(braces.indexOf("{}") != -1 || braces.indexOf("()") != -1 || braces.indexOf("[]") != -1){
        braces = braces.replace("{}", "").replace("()", "").replace("[]", "");
    }
    return braces.length == 0;
}
_________________________________________________
function validBraces(braces){
    for (var i = 0, depth = []; i < braces.length; i++) {
        switch (braces[i]) {
            case '(': case '[': case '{': depth.push(braces[i]); break;
            case ')': if (depth.pop() != '(') return false; break;
            case ']': if (depth.pop() != '[') return false; break;
            case '}': if (depth.pop() != '{') return false; break;
        }
    }
    return depth.length == 0;
}
_________________________________________________*/
