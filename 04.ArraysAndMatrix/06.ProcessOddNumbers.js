'use strict'

function OddNumber(arr){
    let oddNumber = arr.filter((num, index) => index % 2 === 1)
        .map(x => x * 2).reverse().join(' ');

    console.log(oddNumber);
}

OddNumber([10, 15, 20, 25]);
OddNumber([3, 0, 10, 4, 7, 3]);