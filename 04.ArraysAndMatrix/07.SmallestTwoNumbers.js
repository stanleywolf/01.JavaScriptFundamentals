'use strict'

function SmallTwoNumber(arr) {

    let result = arr.sort((a,b) => a-b);
    return result.slice(0,2).join(' ');
}

console.log(SmallTwoNumber([30, 15, 50, 5]));
console.log(SmallTwoNumber([3, 0, 10, 4, 7, 3]));