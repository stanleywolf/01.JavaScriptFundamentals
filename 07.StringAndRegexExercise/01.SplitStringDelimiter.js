'use strict';

function splitDelimeter(str,delim){

    let result = str.split(delim);
    console.log(result.join('\n'));
}

splitDelimeter('One-Two-Three-Four-Five', '-');
splitDelimeter('http://platform.softuni.bg','.')