'use strict';

function symetryChek(text) {

    for (let i = 0; i < text.length / 2; i++) {
        if(text[i] !== text[text.length - 1 - i]){
            console.log(false);
            return;
        }
    }
    console.log(true);
}

symetryChek('abba');
symetryChek('test');