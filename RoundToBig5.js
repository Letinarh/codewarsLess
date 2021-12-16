function roundToNext5(n){
    let ans;
    let num = n;
    for (let i = 0; i < 6; i++){
        if (num % 5 == 0){
            ans = num;
        } else {
            num = n + i
        }
    }
    return ans;
}
/*    округлить к лижайшему большему числу  кратно 5
____________________________________
function roundToNext5(n){
    return Math.ceil(n/5)*5;
}
____________________________________
function roundToNext5(n){
    return Math.ceil(n/5)*5;
}
____________________________________
const roundToNext5 = n => Math.ceil(n / 5) * 5;
____________________________________
*/

