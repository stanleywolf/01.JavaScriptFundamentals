'use strict';

function Match(text) {

    let regex = /\b[a-zA-Z0-9_]+\b/g;
    let exec ;
    let result  = [];
    while (exec = regex.exec(text)){
        result.push(exec)
    }
    console.log(result.join("|"));

}

Match('A Regular Expression needs to have the global flag in order to match all occurrences in the text');

Match('_(Underscores) are also word characters');