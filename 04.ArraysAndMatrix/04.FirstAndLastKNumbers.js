'use strict'

function FirstAndLast(arr) {
    let k = arr.shift();

    let first = arr.slice(0,k);
    let last = arr.slice(arr.length - k,arr.length);

    console.log(first.join(' '));
    console.log(last.join(` `));

}

FirstAndLast([2,7, 8, 9]);
FirstAndLast([3,6, 7, 8, 9]);


