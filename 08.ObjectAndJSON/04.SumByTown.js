'use strict';

function sumBytown(arr) {

    let sum = {};

    for (let i = 0; i < arr.length; i+=2) {

        let[town,income] = [arr[i], +arr[i + 1]];

        if(sum.hasOwnProperty(arr[i])){
            sum[town] += income;
        }else {
            sum[town] = income;
        }
    }
    console.log(JSON.stringify(sum));
}

sumBytown(['Sofia','20','Varna','3','Sofia','5','Varna','4']);
sumBytown(['Sofia','20','Varna','3','sofia','5','varna','4']);