//return the total number of smiling faces in the array
function countSmileys(arr) {
    let sum = 0;
    for (let i = 0 ; i < arr.length; i++){
        if (arr[i] == ":)" || arr[i] == ":-)" || arr[i] == ":~)" || arr[i] == ":~D" || arr[i] == ":-D" || arr[i] == ":D" || arr[i] == ";D" || arr[i] == ";)" || arr[i] == ";-D" || arr[i] == ";~D" || arr[i] == ";-)" || arr[i] == ";~)"){
            sum += 1;
        }
    }
    return sum
}
/*
__________________________________________________________________________________________________________
const countSmileys = ss => ss.reduce((a, s) => a + /^[:;][-~]?[D)]$/.test(s), 0);
__________________________________________________________________________________________________________
function countSmileys(arr) {
    return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}
__________________________________________________________________________________________________________


function countSmileys(arr) {
    return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}

__________________________________________________________________________________________________________



function countSmileys(arr) {
    var smileys = [":)",";)",":-)",";-)",";~)",":~)",":D",";D",":-D",":~D",";-D",";~D"];
    var count = 0;

    for (var i=0; i<arr.length; i++){
        for (var j=0; j<smileys.length; j++){
            if (arr[i]===smileys[j]){
                count++;
            }
        }
    }
    return count;
}
__________________________________________________________________________________________________________


const SMILING = /[:;]{1}[-~]?[)D]{1}/;

const countSmileys = (faces) => faces.filter(face => SMILING.test(face)).length;
__________________________________________________________________________________________________________

const smileyIsValid = smiley =>
    smiley.length === 3 || smiley.length === 2

const smileyHasValidEye = smiley => {
    const maybeEye = smiley.charAt(0)
    return maybeEye === ':' || maybeEye === ';'
}

const smileyHasNose = smiley =>
    smiley.length === 3

const smileyHasValidNose = smiley => {
    const maybeNose = smiley.charAt(1)
    return smileyHasNose(smiley) ? maybeNose === '-' || maybeNose === '~' : true
}

const smileyHasValidMouth = smiley => {
    const maybeMouth = smileyHasNose(smiley) ? smiley.charAt(2) : smiley.charAt(1)
    return maybeMouth === ')' || maybeMouth === 'D'
}

//return the total number of smiling faces in the array
const countSmileys = smileys =>
    smileys.filter(smiley =>
        smileyIsValid(smiley) &&
        smileyHasValidEye(smiley) &&
        smileyHasValidNose(smiley) &&
        smileyHasValidMouth(smiley)
    ).length
__________________________________________________________________________________________________________