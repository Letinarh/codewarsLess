/*
Description
Bob and Charles are meeting for their weekly jogging tour. They both start at the same spot called "Start" and they each run a different lap, which may (or may not) vary in length. Since they know each other for a long time already, they both run at the exact same speed.

    Illustration
Example where Charles (dashed line) runs a shorter lap than Bob:
Example laps

Task
Your job is to complete the function nbrOfLaps(x, y) that, given the length of the laps for Bob and Charles, finds the number of laps that each jogger has to complete before they meet each other again, at the same time, at the start.

    The function takes two arguments:

    The length of Bob's lap (larger than 0)
    The length of Charles' lap (larger than 0)

    The function should return an array (Tuple<int, int> in C#) containing exactly two numbers:

    The first number is the number of laps that Bob has to run
    The second number is the number of laps that Charles has to run

Examples:

    nbrOfLaps(5, 3); // returns [3, 5]
    nbrOfLaps(4, 6); // returns [3, 2]*/

var nbrOfLaps = function (x, y) {

    function NOK(n,m) {
        function gcd(a, b) {
            return b == 0 ? a : gcd(b, a % b);
        }
        return n * m / gcd(n, m);
    }

    let time = NOK(x,y)

    return [time / x, time / y];
}


/*
______________________
var nbrOfLaps = function(x, y) {
    var lcm = x;
    while(lcm % y != 0) {lcm += x;}
    return [lcm / x, lcm / y];
}
______________________
const nbrOfLaps = (x, y) => {
    let cnt = 0;
    while (++cnt * x % y) ;
    return [cnt, cnt * x / y];
};
______________________
var nbrOfLaps = function (x, y) {
    for(i=1;x*i%y > 0;i++){}
    return([i,x*i/y]);
}
______________________
var nbrOfLaps = function (x, y) {
    for(let i=x;;i+=x)
        if (i%y==0) return [i/x,i/y];
}
______________________*/
