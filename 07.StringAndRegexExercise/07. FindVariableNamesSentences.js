'use strict';

function findVariable(text) {

    let regex = /\b_[0-9a-zA-Z]+\b/g;

    let result = [];

    let exec;
    while (exec = regex.exec(text)){
        result.push(exec[0].substr(1))
    }
    console.log(result.join(','));
}

findVariable('The _id and _age variables are both integers.');
findVariable('Calculate the _area of the _perfectRectangle object.');