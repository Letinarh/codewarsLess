function positiveSum(arr) {
    let number = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i]>0) {
            number += arr[i];
        }
    }
    return number;
}

/*
function positiveSum (arr) {
  return arr.filter(x => x>=0).reduce((a, c) => a + c, 0);
}
_____________________________________________________
function positiveSum(arr) {
   return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}
_____________________________________________________
function positiveSum(arr) {
  var sum = 0;
  arr.forEach(function(v,i,a) {
    if(v>0){sum+=v;}
  });
  return sum;
}
 */