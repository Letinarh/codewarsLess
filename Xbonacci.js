function Xbonacci(signature,n){
    let arrSlug = signature;
    let xFibo = signature.length;
    let arrRes;
    let sst;

    for (let i = xFibo; i < n; i++){
        sst = sumArr(arrSlug);
        arrRes.push(sst);
        arrSlug.push(sst).shift();
    }

    return arrSlug;
}


function sumArr(x) {
    let sum;
    for (i = 0; i < x.length; i++){
        sum += x[i];
    }return sum;
}
// недорешана