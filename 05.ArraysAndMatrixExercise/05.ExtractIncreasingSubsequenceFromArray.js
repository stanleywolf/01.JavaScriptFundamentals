'use strict'

function Extract(numArr) {

    if(numArr.length === 0){
        return'';
    }

    let result = [numArr[0]];
    let currentBiggest = result[0];
    for (let i = 1; i < numArr.length; i++) {
        if(numArr[i] >= Math.max.apply(null,numArr.slice(0,i))){
            result.push(numArr[i]);
        }
    }
    console.log(result.join('\n'));
}

Extract([1,3,8,4,10,12,3,2,24]);
console.log()
Extract([20,3,2,15,6,1]);