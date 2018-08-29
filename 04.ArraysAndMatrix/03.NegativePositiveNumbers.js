'use strict'

function NegaPositive(arr) {

    let result = [];

    for (let num of arr) {
        if(num < 0){
            result.unshift(num)
        }
        else{
            result.push(num)
        }
    }

    console.log(result.join('\n'));
}

NegaPositive([7, -2, 8, 9]);
NegaPositive([3, -2, 0, -1]);