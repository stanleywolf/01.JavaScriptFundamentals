'use strict';

function capture(arr) {

    let regex = /[0-9]+/g

    let exec;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        while (exec = regex.exec(arr[i])) {
            result.push(exec)
        }
    }
    console.log(result.join(' '));
}

capture(['The300', 'What is that?', 'I think it’s the 3rd movie.', 'Lets watch it at 22:45']);
capture(['123a456', '789b987', '654c321', '0']);