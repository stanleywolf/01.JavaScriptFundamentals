'use strict';

function EvenPosElement(arr) {

    let evenElement = [];

    for (let i = 0; i < arr.length; i+=2) {
        evenElement.push(arr[i]);

    }
    console.log(evenElement.join(" "));
}

EvenPosElement(['20', '30', '40']);
EvenPosElement(['5', '10']);