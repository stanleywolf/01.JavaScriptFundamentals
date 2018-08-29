'use strict';

function calcSumAndVAT(arr) {
    let sum = 0;
    for (let num of arr)
        sum += num;

    let vat = sum * 0.2;
    let total = sum + vat;
    console.log('sum = ' +sum);
    console.log('VAT = ' + vat);
    console.log('total = ' + total);
}
let arr;
calcSumAndVAT(arr);