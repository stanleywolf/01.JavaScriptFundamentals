'use strict'

function Rotate(arr) {
    let count = Number(arr.pop()) % arr.length;

    for (let i = 0; i < count; i++) {
         let elementToRotate = arr.pop();
         arr.unshift(elementToRotate);

    }
    console.log(arr.join(' '));
}

Rotate(['1','2','3','4','2']);
Rotate(['ba','or','co','ap','15']);