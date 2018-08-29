'use strict';

function Split(text) {
    text = text.split(/[\s(),;.]+/g);
    console.log(text.join('\n'));
}

Split('let sum = 4 * 4,b = "wow";');
Split('let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}');