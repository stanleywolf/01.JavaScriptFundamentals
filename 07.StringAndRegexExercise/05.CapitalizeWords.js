'use strict';

function capitalizeWords(text) {

    let result = text.toLowerCase()
                     .split(' ')
                     .map(c => c[0].toUpperCase() + c.substr(1))
                     .join(' ');
    console.log(result);
}

capitalizeWords('Capitalize these words');
capitalizeWords('Was that Easy? tRY thIs onE for SiZe!');