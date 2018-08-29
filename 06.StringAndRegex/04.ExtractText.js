'use strict';

function Extract(text) {

    let result = [];

    let openBracket = text.indexOf('(');
    let closeBracket = text.indexOf(')',openBracket + 1);

    while (openBracket > -1 && closeBracket > -1){
        result.push(text.substring(openBracket + 1,closeBracket));
        openBracket = text.indexOf('(',closeBracket);
        closeBracket = text.indexOf(')',openBracket);
    }
    console.log(result.join(', '));
}

Extract('Rakiya (Bulgarian brandy)' +
    ' is self-made liquor (alcoholic drink)');