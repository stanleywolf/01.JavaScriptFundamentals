'use strict';

function check(num) {

    let prime = true;
    for (let i = 2; i < Math.sqrt(num); i++) {
        if(num % i === 0){
            prime = false;
            break;
        }
    }
    console.log(prime && (num > 1));
}

check(7);
check(8);
check(81);