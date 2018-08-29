'use strict';

function colourNum(num) {

    let result = '<ul>\n';
    for (let i = 1; i <= num; i++) {
        let color = (i % 2 === 0) ? 'blue' : 'green';
        result += `  <li><span style='color: ${color}'>${i}</span></li>\n`;
    }
    console.log(result += `</ul>`);
}

colourNum(10);
colourNum(14);