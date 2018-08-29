'use strict';

function Reverse(input) {

    let result = input.join("")
        .split("").reverse().join("");
    console.log(result);
}

Reverse(['I', 'am', 'student']);
Reverse(['race', 'car']);