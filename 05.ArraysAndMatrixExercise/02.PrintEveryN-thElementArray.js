'use strict'

function PrintNElementy(arr) {
    let nStep = Number(arr.pop());
    let result = [];
    for (let i = 0; i < arr.length; i+= nStep) {

            result.push(arr[i]);

    }
    console.log(result.join('\n'));
}

PrintNElementy(['5', '20', '31', '4', '20', '2'])