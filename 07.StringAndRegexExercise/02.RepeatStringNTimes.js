'use strict';

function repetatNTimes(str,rep) {

    let result = '';
    for (let i = 0; i < rep; i++) {
        result += str;
    }
    console.log(result);
}

repetatNTimes('repeat', 5);
repetatNTimes('magic is real',3);