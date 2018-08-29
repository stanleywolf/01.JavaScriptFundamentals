'use strict';

function countLetter(string,letter) {
    let counter = 0;

    for (let i = 0; i < string.length; i++) {
        if(string[i] == letter){
            counter++;
        }
    }
    console.log(counter);
}
let string = 'hello';
let letter = 'l';
countLetter(string,letter);